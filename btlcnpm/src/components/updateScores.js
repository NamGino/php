import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const updateScores = () => {

    return (
        <>
            <Formik
                initialValues={{
                    hoc_sinh_MaHS: '',
                    mon_hoc_MaMH: '',
                    diem: '',
                }}
                onSubmit={(values) => {
                    axios.put(`http://localhost:80/diem/`, values).then(response => {
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
        </>
    )
}

export default updateScores