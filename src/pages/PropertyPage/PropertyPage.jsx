import React, { useState, useMemo } from "react";
import Navbar from "../../components/HomePage/Navbar/Navbar";
import PropertyCard       from "../../components/PropertyPage/PropertyCard/PropertyCard";
import PropertyFilters    from "../../components/PropertyPage/PropertyFilters/PropertyFilters";
import PropertySort       from "../../components/PropertyPage/PropertySort/PropertySort";
import PropertyMap        from "../../components/PropertyPage/PropertyMap/PropertyMap";
import PropertyPagination from "../../components/PropertyPage/PropertyPagination/PropertyPagination";
import { propertiesPageData, ITEMS_PER_PAGE } from "../../api/propertiesPageData";
import "./PropertyPage.css";

const Properties = () => {
  const [filters,     setFilters]     = useState({});
  const [sortBy,      setSortBy]      = useState("newest");
  const [view,        setView]        = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMap,     setShowMap]     = useState(false);
  
  // ── Filter ──
  const filtered = useMemo(() => {
    let data = [...propertiesPageData];
    if (filters.location && filters.location !== "All Locations")
      data = data.filter((p) => p.location === filters.location);
    if (filters.type && filters.type !== "All Types")
      data = data.filter((p) => p.type === filters.type);
    if (filters.beds && filters.beds !== "Any")
      data = data.filter((p) => p.bedrooms >= parseInt(filters.beds));
    if (filters.minPrice !== undefined)
      data = data.filter((p) => p.price >= filters.minPrice);
    if (filters.maxPrice !== undefined)
      data = data.filter((p) => p.price <= filters.maxPrice);
    return data;
  }, [filters]);

  // ── Sort ──
  const sorted = useMemo(() => {
    const data = [...filtered];
    if (sortBy === "price_asc")  return data.sort((a, b) => a.price - b.price);
    if (sortBy === "price_desc") return data.sort((a, b) => b.price - a.price);
    if (sortBy === "sqft_desc")  return data.sort((a, b) => b.sqft - a.sqft);
    if (sortBy === "beds_desc")  return data.sort((a, b) => b.bedrooms - a.bedrooms);
    return data.sort((a, b) => new Date(b.listed) - new Date(a.listed));
  }, [filtered, sortBy]);

  // ── Paginate ──
  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const paginated  = sorted.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleFilter = (f) => { setFilters(f); setCurrentPage(1); };
  const handleSort   = (s) => { setSortBy(s);  setCurrentPage(1); };
  

  
  return (
    <>
      <Navbar />
      <div className="props-page">

        {/* ── Hero banner ── */}
        <div className="props-hero">
          <div className="props-hero__inner">
            <p className="props-hero__eyebrow">◆ Browse Listings</p>
            <h1 className="props-hero__title">Find Your <em>Perfect Property</em></h1>
            <p className="props-hero__sub">
              Explore handpicked properties across the United Arab Emirates
            </p>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="props-body">

          {/* Sidebar filters */}
          <aside className="props-sidebar">
            <PropertyFilters onFilter={handleFilter} />
            <div className="props-map-toggle">
              <button
                className={`props-map-btn ${showMap ? "props-map-btn--active" : ""}`}
                onClick={() => setShowMap((s) => !s)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M9 20l-5.4-2.7A1 1 0 013 16.38V5.12a1 1 0 011.4-.92L9 6.5l6-3 5.4 2.7A1 1 0 0121 7.12v11.27a1 1 0 01-1.4.92L15 17l-6 3z"
                    stroke="currentColor" strokeWidth="1.6"/>
                  <line x1="9" y1="6.5" x2="9" y2="20"  stroke="currentColor" strokeWidth="1.6"/>
                  <line x1="15" y1="3.5" x2="15" y2="17" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
                {showMap ? "Hide Map" : "Show Map"}
              </button>
            </div>
          </aside>

          {/* Main content */}
          <main className="props-main">

            {/* Map */}
            {showMap && (
              <div className="props-map-wrap">
                <PropertyMap properties={sorted} />
              </div>
            )}

            {/* Sort bar */}
            <PropertySort
              total={sorted.length}
              view={view}
              onSort={handleSort}
              onViewChange={setView}
            />

            {/* Results */}
            {paginated.length === 0 ? (
              <div className="props-empty">
                <div className="props-empty__icon">🏠</div>
                <h3 className="props-empty__title">No properties found</h3>
                <p className="props-empty__sub">Try adjusting your filters to see more results.</p>
                <button className="props-empty__btn" onClick={() => handleFilter({})}>
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`props-grid ${view === "list" ? "props-grid--list" : ""}`}>
                {paginated.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            )}

            <PropertyPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default Properties;