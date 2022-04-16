import React, { useState, useRef} from 'react'
import '../Assets/CSS/Form.css'

function Form() {
    const baseData = {
        nama: "",
        email: "",
        noHandphone: "",
        pendidikan: "",
        kelas: "",
        harapan: ""
    }
    
    const baseError = {
    nama: "",
    email: "",
    noHandphone: "",
    }

    const suratKesungguhan = useRef('')
    const namaRegex = /^([A-Za-z]*$)/;
    const noHPRegex = /^([0-9]*$)/;
    const [data, setData] = useState(baseData);
    const [errorMassage, setErrorMassage] = useState(baseError);
    const [radioIT, setRadioIT] = useState(false);
    const [radioNONIT, setRadioNONIT] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "nama") {
            if (namaRegex.test(value)) {
                console.log("nama aman");
                setErrorMassage({
                    ...errorMassage,
                    nama: ""   
                })
            }else {
                console.log("nama salah");
                setErrorMassage({
                    ...errorMassage,
                    nama: "Nama Lengkap Harus Berupa Huruf!"   
                })
            }
        }else if (name === "noHandphone") {
            if (noHPRegex.test(value)) {
                console.log("no hp aman");
                setErrorMassage({
                    ...errorMassage,
                    noHandphone: ""   
                })
            }else {
                console.log("hp salah");
                setErrorMassage({
                    ...errorMassage,
                    noHandphone: "No Handphone Harus Berupa Angka!"   
                })
            }
        }

        setData ({
            ...data,
            [name]:value
        });
        console.log("data",data);
    }

    const handleRadioButton = (e) => {
        if (e.target.name === "IT") {
            setData ({
                ...data,
                pendidikan: e.target.value
            });
            setRadioIT(!radioIT);
            setRadioNONIT(false);
            console.log("pilihan",e.target.value);
            console.log("data",data);
        }else if (e.target.name === "NonIT"){
            setData ({
                ...data,
                pendidikan: e.target.value
            });
            setRadioNONIT(!radioNONIT);
            setRadioIT(false);
            console.log("pilihan",e.target.value);
            console.log("data",data);
        }
    }

    const handleChangeSelectTag = (e) => {        
        setData ({
            ...data,
            kelas: e.target.value
        });
        console.log("event",e.target.value);
        console.log("data",data)
    }

    const handleSubmit = (e) => {
        if (errorMassage.nama === "" && errorMassage.email === "" && errorMassage.noHandphone === ""){
            alert("Data Pendaftar Berhasil Diterima");
        }else {
            alert("Data Pendaftar Tidak Sesuai");
        }

        e.preventDefault();
    }

    const resetData =  () => {
        
        setData(baseData);
        setErrorMassage(baseError);
        console.log("reset euy")
        console.log("data",data)
    }

    return (
        <>
            <div className='container mt-5'>
                <h1 className='text-center'>Pendaftaran Peserta Coding Bootcamp</h1>
                <form onSubmit={handleSubmit}>    
                    <label>
                        Nama Lengkap: <br/>
                        <input type='text' name='nama' onChange={handleChange} required/>
                    </label><br/>
                    <label>
                        Email: <br/>
                        <input type='email' name='email' onChange={handleChange} required />
                    </label><br/>
                    <label>
                        No Handphone: <br/>
                        <input type='text' minLength='9' maxLength='14' name='noHandphone' onChange={handleChange} required/>
                    </label><br/>
                    <label>
                        Latar Belakang Pendidikan: <br/>
                        <input type='radio' name='IT' value="IT" checked={radioIT} onClick={handleRadioButton}/>IT
                        <input type='radio' name='NonIT' value="NonIT" checked={radioNONIT} onClick={handleRadioButton}/>Non IT
                    </label><br/>
                    <label>
                        Kelas Coding yang Dipilih: <br/>
                        <select onChange={handleChangeSelectTag}>
                            <option value="" disabled selected hidden>Pilih Salah Satu Program</option>
                            <option name="Backend" value="Backend">Coding Backend with Golang</option>
                            <option name="Frontend" value="Frontend">Coding Frontend with ReactJS</option>
                            <option name="Fullstack" value="Fullstack">Fullstack Developer</option>
                        </select>
                    </label><br/>
                    <label>
                        Foto Surat Kesungguhan: <br/>
                        <input type='file' refs={suratKesungguhan} required/>
                    </label><br/>
                    <label>
                        Harapan Untuk Coding Bootcamp Ini: <br/>
                        <textarea name='harapan' onChange={handleChange}></textarea>
                    </label>
                    <br/>
                    <span>
                        <p className='textError'>
                            {errorMassage.nama}<br/>
                            {errorMassage.email}<br/>
                            {errorMassage.noHandphone}<br/>
                        </p>
                    </span>
                    <br/>
                    <input type='Submit' name='Submit' value='Submit'/>
                    <input onClick={resetData} type='Reset' name='Reset' value='Reset'/>
                </form>
            </div>
        </>
    )
}

export default Form