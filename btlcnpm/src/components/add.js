import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
const AddLms = () => {
    const navigate = useNavigate();


    return (
        <>
            <Formik
                initialValues={{
                    MaHS: '',
                    ten: '',
                    nam_sinh: '',
                    gioi_tinh: '',
                    lop_MaLop: null,
                    phu_huynh_MaPH: null,
                    so_hoc_phi_con_lai: null,
                }}
                onSubmit={(values) => {
                    axios.post('http://localhost:80/php/hocsinh', values).then(response => {
                        if (response.status === 200) {
                            navigate('/TableLms');
                        }
                    })
                }}
            >
                {(values) => (
                    <Form>
                        <div className='row col-lg-12'>
                            <div className='d-flex align-items-center'>
                                <h1 className='me-3'><Link className='text-decoration-none' to={'/TableLms'}>+</Link></h1>
                                <div className='title_user mt-1 d-flex justify-content-center'>Add Students</div>
                            </div>
                            <div className='col-lg-9'>
                                <div>
                                    <b> Thông tin cá nhân</b><br />
                                    <div>
                                        <span>Mã Học Sinh  <span style={{ color: 'red' }}>*</span></span>
                                    </div>
                                    <div>
                                        <Field
                                            className="w-100 mb-3"
                                            type="text"
                                            id="MaHS"
                                            name="MaHS"
                                            placeholder='Mã Học Sinh'
                                        />
                                    </div>
                                    <span>Tên <span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className='mb-3'>
                                    <Field
                                        className="w-100"
                                        type="text"
                                        id="ten"
                                        name="ten"
                                        placeholder='Tên'
                                    />
                                </div>

                                <div className='d-flex justify-content-between mb-3'>
                                    <div className='col-lg-5'>
                                        <div>
                                            <span>Năm Sinh<span style={{ color: 'red' }}>*</span></span>
                                        </div>
                                        <Field
                                            className="w-100"
                                            type="date"
                                            id="nam_sinh"
                                            name="nam_sinh"
                                        />
                                    </div>

                                    <div className='col-lg-5'>
                                        <div>
                                            <span>Giới tính</span>
                                        </div>
                                        <div>
                                            <Field
                                                style={{ marginRight: '10px' }}
                                                type="radio"
                                                id="gioi_tinh"
                                                name="gioi_tinh"
                                                value='Nam'
                                            />
                                            Nam
                                        </div>

                                        <Field
                                            style={{ marginRight: '10px' }}
                                            type="radio"
                                            id="gioi_tinh"
                                            name="gioi_tinh"
                                            value='Nu'
                                        />
                                        Nữ
                                    </div>
                                </div>
                                <div>
                                    <span>Mã Lớp</span>
                                </div>
                                <div>
                                    <Field
                                        className="w-100 mb-3"
                                        type="text"
                                        id="lop_MaLop"
                                        name="lop_MaLop"
                                        placeholder='lop_MaLop'
                                    />
                                </div>
                                <div>
                                    <span>Mã Phụ Huynh</span>
                                </div>
                                <div>
                                    <Field
                                        className="w-100 mb-3"
                                        type="text"
                                        id="phu_huynh_MaPH"
                                        name="phu_huynh_MaPH"
                                        placeholder='phu_huynh_MaPH'
                                    />
                                </div>
                                <div>
                                    <span>Học Phí </span>
                                </div>
                                <div>
                                    <Field
                                        className="w-100 mb-3"
                                        type="text"
                                        id="so_hoc_phi_con_lai"
                                        name="so_hoc_phi_con_lai"
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit">Thêm mới</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default AddLms