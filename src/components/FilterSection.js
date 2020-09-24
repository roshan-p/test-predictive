import React from 'react';



function FilterSection() {
    return (
        <section className="list-container">
        <div className="list-heading">
          <h2>บ้านเดี่ยว</h2>
          <h3 className="home-total">
            จำนวนทั้งหมด <span>
              43
            </span>โครงการ </h3>
          <div className="action-button-absolute hidden-w980">
            <button type="button" className="btn btn-search">ค้นหาจากแบรนด์บ้านเดี่ยว</button>
          </div>
        </div>
  
        <div className="filter-container">
          <div className="filter-block">
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
       
              <div className="btn-group mr-2 gridlist-display" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary gridview current view-btn-active"><i
                    className="fas fa-th align-middle view-icon-active"></i></button>
                <button type="button" className="btn btn-primary tab-link gridlist current view-btn-inactive"><i
                    className="fas fa-list align-middle view-icon-inactive"></i></button>
              </div>
              <div className="btn-group" role="group" aria-label="Second group">
                <button type="button" className="btn  btn-primary btn-map"><i
                    className="fas fa-map-marked-alt map-icon-inactive"></i></button>
              </div>
            </div>
          </div>
  
          <div id="filter-menu" className="row-filter">
            <div className="row" id="navbarNav">
              <div className="col-filter col-relative col-sm-12 col-md-6 col-lg-3">
                <button type="button" className="btn row-filter-btn">เลือกสถานะโครงการ <text
                    className="filter-dropdown-icon-right-active">1&nbsp;&nbsp;<i className="fas fa-filter"
                      aria-hidden="true"></i> </text></button>
              </div>
              <div className="col-filter location-filter col-sm-12 col-md-6 col-lg-3">
                <button type="button" className="btn row-filter-btn ">เลือกทำเลที่น่าสนใจ<text
                    className="filter-dropdown-icon-right">&nbsp;&nbsp;<i className="fas fa-filter" aria-hidden="true"></i>
                  </text></button>
              </div>
              <div className="col-filter startprice col-sm-12 col-md-6 col-lg-3">
                <button type="button" className="btn row-filter-btn">ราคาโครงการเริ่มต้น <text
                    className="filter-dropdown-icon-right">&nbsp;&nbsp;<i className="fas fa-filter" aria-hidden="true"></i>
                  </text></button>
              </div>
              <div className="col-filter col-relative sort-filter col-sm-12 col-md-6 col-lg-3">
                <button type="button" className="btn row-filter-btn">เรียงตามลำดับ ใหม่-เก่า <text
                    className="filter-dropdown-icon-right">&nbsp;&nbsp;<i className="fas fa-filter" aria-hidden="true"></i>
                  </text></button>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    )

}

export default FilterSection;