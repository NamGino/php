import axios from "axios";
import "./tableLMS.css"
import { useState, useEffect } from "react"
import { HiPencil } from 'react-icons/hi';
import DeleteLms from "./delete";
import { Link } from 'react-router-dom';
const TableLms = () => {

    const [ListLms, setListLms] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get('http://localhost:80/php/hocsinh').then(res => {
                    if (res.status === 200)
                        setListLms(res.data);
                    console.log(res.data);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

 

    return (
        <>
            <div className="drawer drawer--left o_web_client">
                <div className="o_main_content"><div className="o_control_panel">
                    <ol className="breadcrumb"><li className="active">Students</li></ol>
                    <div className="o_cp_searchview">
                        <div className="o_searchview">
                            <span className="o_searchview_more fa fa-search-plus" title="Advanced Search..."></span>
                            <input className="o_searchview_input" placeholder="Search..." type="text" />
                        </div>
                    </div>
                    <div className="o_cp_left">
                        <div className="o_cp_buttons"><div className="o_list_buttons">
                            <div className="tm723-search btn-group btn-group-sm">
                                <span style={{ float: "left", marginLeft: "2px" }}>
                                    <button className="btn btn-primary btn-primary-sm" type="button">Reset</button>
                                </span>
                                <Link to={'/AddLms'}>
                                <span style={{ float: "left", marginLeft: "15px" }}>
                                    <button className="btn btn-primary btn-primary-sm" type="button">add</button>
                                </span>
                                </Link> 
                                <Link to={'/Scores'}>
                                <span style={{ float: "left", marginLeft: "15px" }}>
                                    <button className="btn btn-primary btn-primary-sm" type="button">Scores</button>
                                </span>
                                </Link> 
                            </div></div></div>
                    </div>
                    <div className="o_cp_right">
                        <div className="o_cp_pager"><div>
                            <span className="o_pager_counter">
                                <span className="o_pager_value">1-80</span> / <span className="o_pager_limit">23573</span>
                            </span>
                            <span className="btn-group btn-group-sm">
                                <button aria-label="Previous" className="fa fa-chevron-left btn btn-icon o_pager_previous" type="button" accesskey="p"></button>
                                <button aria-label="Next" className="fa fa-chevron-right btn btn-icon o_pager_next" type="button" accesskey="n"></button>
                            </span>
                        </div>
                        </div>
                        <div className="btn-group btn-group-sm o_cp_switch_buttons">
                            <button type="button" accesskey="l" aria-label="list" data-view-type="list" title="" className="btn btn-icon fa fa-lg fa-list-ul o_cp_switch_list active" data-original-title="List"></button>

                            <button type="button" accesskey="k" aria-label="kanban" data-view-type="kanban" title="" className="btn btn-icon fa fa-lg fa-th-large o_cp_switch_kanban" data-original-title="Kanban"></button>

                            <button type="button" aria-label="pivot" data-view-type="pivot" title="" className="btn btn-icon fa fa-lg fa-table o_cp_switch_pivot" data-original-title="Pivot"></button>
                        </div>
                    </div>
                </div>

                    <div className="o_content"><div className="o_view_manager_content"><div className="o_cannot_create"><div className="table-responsive"><table className="o_list_view table table-condensed table-striped o_list_view_ungrouped">
                        <thead>
                            <tr>
                                <th width="1" className="o_list_record_selector">
                                </th>
                                <th className="o_column_sortable">MaHS</th>
                                <th className="o_column_sortable">Tên</th>
                                <th className="o_column_sortable">Năm Sinh</th>
                                <th className="o_column_sortable">Giới Tính</th>
                                <th className="o_column_sortable">Mã Lớp</th>
                                <th className="o_column_sortable">Mã Phụ Huynh</th>
                                <th className="o_column_sortable">Số học phí còn lại</th>
                                <th className="o_column_sortable">Hành Động</th>
                            </tr>
                        </thead>

                        <tbody>
                  
                                {ListLms && ListLms.map((item) => (
                                        <>
                                                  <tr className="o_data_row">
                                <td width="1" className="o_list_record_selector" key={item.id}>
                                </td>
                                            <td className="o_data_cell o_readonly_modifier">{item.MaHS}</td>
                                            <td className="o_data_cell o_readonly_modifier">{item.ten}</td>
                                            <td className="o_data_cell">{item.nam_sinh}</td>
                                            <td className="o_data_cell o_many2many_tags_cell">
                                                <div className="o_field_many2manytags o_field_widget" name="parent_ids">


                                                    <span data-color="0" data-id="7621" data-index="0" className="o_data_cell">
                                                        <span className="o_badge_text">{item.gioi_tinh}</span>

                                                    </span>

                                                </div>
                                            </td>
                                            <td className="o_data_cell">{item.lop_MaLop}</td>
                                            <td className="o_data_cell">{item.phu_huynh_MaPH}</td>
                                            <td className="o_data_cell o_many2many_tags_cell o_readonly_modifier">
                                                <div className="o_field_many2manytags o_field_widget o_readonly_modifier" name="admission_company_ids">


                                                    <span data-color="0" data-id="38" data-index="0" className="o_data_cell">
                                                        <span className="o_badge_text">{item.so_hoc_phi_con_lai}</span>

                                                    </span>
                                                </div></td>
                                            <td> 
                                                <Link to={`/UpdateLms/${item.MaHS}`}><HiPencil className='text-danger mx-2' style={{ cursor: 'pointer' }} /> </Link>
                                                <DeleteLms LmsDelete={item}/>
                                            </td>
                                                </tr>
                                        </>
                                ))
                                }
                            
                        </tbody>
                        <tfoot><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tfoot></table></div></div></div></div></div>
            </div>
        </>
    )
}
export default TableLms