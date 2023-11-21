import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from 'react-router-dom';
import { HiPencil } from 'react-icons/hi';
import { MdOutlineDelete } from 'react-icons/md';
import { Formik, Form, Field } from 'formik';
import './tableLMS.css'
const Scores = () => {
    const [ListScores, setListScores] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get('http://localhost:80/diem/').then(res => {
                    if (res.status === 200)
                        setListScores(res.data);
                    console.log(res.data);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const deleteScores = async (id) => {
        try {
            await axios.delete(`http://localhost:80/diem/${id}/`).then(response => {
                if (response.status === 200) {
                    window.location.reload();
                }
            });
        } catch {
            console.log("error");
        }
    }
    return (
        <>
            <div className="drawer drawer--left o_web_client">
                <div className="o_main_content"><div className="o_control_panel">
                    <ol className="breadcrumb"><li className="active">Scores</li></ol>
                    <div className="o_cp_searchview">
                    </div>
                </div>
                    <div style={{display:'flex'}}>
                        <div className="o_content"><div className="o_view_manager_content"><div className="o_cannot_create"><div className="table-responsive">
                            <table className="o_list_view table table-condensed table-striped o_list_view_ungrouped" style={{width:'800px', borderBottom:'none'}}>
                            <thead>
                                <tr>
                                    <th width="1" className="o_list_record_selector">
                                    </th>
                                    <th className="o_column_sortable">MaHS</th>
                                    <th className="o_column_sortable">MaMH</th>
                                    <th className="o_column_sortable">Diem</th>
                                    <th className="o_column_sortable">Hanh Dong</th>
                                </tr>
                            </thead>

                            <tbody>

                                {ListScores && ListScores.map((item) => (
                                    <>
                                        <tr className="o_data_row">
                                            <td width="1" className="o_list_record_selector" key={item.id}>
                                            </td>
                                            <td className="o_data_cell o_readonly_modifier">{item.hoc_sinh_MaHS}</td>
                                            <td className="o_data_cell o_readonly_modifier">{item.mon_hoc_MaMH}</td>
                                            <td className="o_data_cell">{item.diem}</td>
                                            <td>
                                                <Link to={`/updateScores/${item.id}`}><HiPencil className='text-danger mx-2' style={{ cursor: 'pointer' }} /> </Link>
                                                <MdOutlineDelete className='text-danger' style={{ cursor: 'pointer' }} onClick={() => deleteScores(item.id)} />
                                            </td>
                                        </tr>
                                    </>
                                ))
                                }

                            </tbody>
                            <tfoot><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tfoot></table></div></div></div>
                        </div>
                        <div style={{width:'500px'}}>
                            <Formik
                                initialValues={{
                                    hoc_sinh_MaHS: '',
                                    mon_hoc_MaMH: '',
                                    diem: '',
                                }}
                                onSubmit={(values) => {
                                    axios.post('http://localhost:80/diem/', values).then(response => {
                                        if (response.status === 200) {
                                            window.location.reload();
                                        }
                                    })
                                }}
                            >
                                {(values) => (
                                    <Form>
                                        <div className='col-lg-6'>
                                            <div>
                                                <div>
                                                    <span>Mã Học Sinh  <span style={{ color: 'red' }}>*</span></span>
                                                </div>
                                                <div>
                                                    <Field
                                                        className="w-100 mb-3"
                                                        type="text"
                                                        id="hoc_sinh_MaHS"
                                                        name="hoc_sinh_MaHS"
                                                        placeholder='hoc_sinh_MaHS'
                                                    />
                                                </div>
                                                <span>Mã Môn Học <span style={{ color: 'red' }}>*</span></span>
                                            </div>
                                            <div className='mb-3'>
                                                <Field
                                                    className="w-100"
                                                    type="text"
                                                    id="mon_hoc_MaMH"
                                                    name="mon_hoc_MaMH"
                                                    placeholder='mon_hoc_MaMH'
                                                />
                                            </div>

                                            <div className='mb-3'>
                                                <div >
                                                    <div>
                                                        <span>Điểm<span style={{ color: 'red' }}>*</span></span>
                                                    </div>
                                                    <Field
                                                        className="w-100"
                                                        type="text"
                                                        id="diem"
                                                        name="diem"
                                                        placeholder='điểm'
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit">Thêm mới</button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Scores