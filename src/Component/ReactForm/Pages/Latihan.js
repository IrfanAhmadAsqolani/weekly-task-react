import React, { useState, useRef} from 'react'

function Latihan() {

    const dataKosong = {
        judul: "",
        pengarang: "",
        cetakan: "",
        tahunTerbit: 0,
        kotaTerbit: "",
        harga: 0,
    }

    const [data, setData] = useState(dataKosong)
    // const namaRegex = /^([A-Za-Z])*$/;
    const [errMsg, setErrMsg] =  useState("")
    const fotoSampul = useRef(null)

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        // if (name === "pengarang") {
        //     if (namaRegex.test(value)) {
        //         setErrMsg("")
        //     }else {
        //         setErrMsg("Nama Pengarang Harus Berupa Huruf!")
        //     }
        // }

        setData({
            ...data,
            [name]: value
        })
        console.log("data", data)
    }

    const handleSubmit = (e) => {
        if (errMsg !== ""){
            alert("Terdapat data yang tidak sesuai")
        }else {
            alert("Data Buku berhasil disimpan")
        }
    }

    return (
        <>
            <div className='container'>
                <h1 className='text-center'>Formulir Buku Baru</h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex-column'>
                        <label>
                            Judul : <br/>
                            <input type='text' name='judul' required onChange={handleInput} value={data.judul}/>
                        </label>
                        <label>
                            Pengarang : <br/>
                            <input type='text' name='pengarang' required onChange={handleInput} value={data.pengarang}/>
                        </label>
                        <label>
                            Cetakan : <br/>
                            <input type='text' name='cetakan' onChange={handleInput} value={data.cetakan}/>
                        </label>
                        <label>
                            Tahun Terbit : <br/>
                            <input type='number' name='tahunTerbit' onChange={handleInput} value={data.tahunTerbit}/>
                        </label>
                        <label>
                            Kota Terbit : <br/>
                            <input type='text' name='kotaTerbit' onChange={handleInput} value={data.kotaTerbit}/>
                        </label>
                        <label>
                            Harga : <br/>
                            <input type='number' name='harga' onChange={handleInput} value={data.harga}/>
                        </label>
                        <label>
                            Foto Sampul : <br/>
                            <input type='file' refs={fotoSampul}/>
                        </label>
                        <br/>
                        <input type='submit' value='submit'/>
                        <button>Reset</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Latihan