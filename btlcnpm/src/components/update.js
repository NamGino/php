import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
const UpdateLms = () => {
    const [dataLms,setDataLms] = useState([]);
    const [Mahocsinh,setMaHS] = useState('');
    const [ten,setTen] = useState('');
    const [namSinh,setNamSinh] = useState('');
    const [gioiTinh,setGioiTinh] = useState('');
    const [maLop,setMaLop] = useState('');
    const [MaPH,setMaPH] = useState('');
    const [hocPhi,setHocPhi] = useState('');
    const navigate = useNavigate('');
    const {MaHS} = useParams();
    useEffect( () => {
        fetchData();
    }, []);

     const fetchData = async () => {
            try {
                await axios.get(`http://localhost:80/php/hocsinh/${MaHS}/`).then(res => {
                    if (res.status === 200)
                    setDataLms(res.data);
                    setMaHS(dataLms.MaHS);
                    setTen(dataLms.ten);
                    setNamSinh(dataLms.nam_sinh);
                    setGioiTinh(dataLms.gioi_tinh);
                    setMaLop(dataLms.lop_MaLop);
                    setMaPH(dataLms.phu_huynh_MaPH);
                    setHocPhi(dataLms.so_hoc_phi_con_lai);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
    return(
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
                    axios.put(`http://localhost:80/php/hocsinh/${MaHS}/`, values).then(response => {
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
                                <div className='title_user mt-1 d-flex justify-content-center'>Update Students</div>
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
                                            value={Mahocsinh}
                                            
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
                                        value={ten}
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
                                            value={dataLms.nam_sinh}
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
                                        value={dataLms.lop_MaLop}
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
                                        value={dataLms.phu_huynh_MaPH}
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
                                        value={dataLms.so_hoc_phi_con_lai}
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

export default UpdateLms