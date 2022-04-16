import { render, screen, fireEvent } from "@testing-library/react";
import NameForm from "./FormCoding";

describe("Form Coding Test render", () => {
    test("render componentn FormCoding", () => {
        render(<NameForm />);
        expect(screen.getByText("Pendaftaran Peserta Coding Bootcamp")).toBeInTheDocument();
        expect(screen.getByText(/Email/i)).toBeInTheDocument();
        expect(screen.getByText(/Latar Belakang Pendidikan/i)).toBeInTheDocument();
    });
})

describe("Form Coding Testing Form", () => {
    test("Testing input nama, email dan No telepon dengan inputan yang benar", () => {
        render(<NameForm />);
        fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), 
            {target: { value: "Irfan" },
        });
        fireEvent.input(screen.getByRole("textbox", { name: /email/i }), 
            {target: { value: "Irfan24@gmail.com" },
        });

        expect(screen.getByRole("textbox", { name: /nama/i }).value).toBe("Irfan");
        expect(screen.getByRole("textbox", { name: /email/i }).value).toBe("Irfan24@gmail.com");
    });

    test("Testing input nama, email dan No telepon dengan inputan yang salah", () => {
        render(<NameForm />);
        fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), 
            {target: { value: "Irf4n" },
        });
        fireEvent.input(screen.getByRole("textbox", { name: /email/i }), 
            {target: { value: "Irfan24" },
        });

        expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
        expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /nama/i }).value).toBe("Irf4n");
        expect(screen.getByRole("textbox", { name: /email/i }).value).toBe("Irfan24");        
    });
    
})

describe("Form Coding Testing Submit Form", () => {
    test("Testing submit form dengan inputan yang benar", () => {
        render(<NameForm />);
        jest.spyOn(window, 'alert').mockImplementation(() => {})

        fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), 
            {target: { value: "Irfan" },
        });
        fireEvent.input(screen.getByRole("textbox", { name: /email/i }), 
            {target: { value: "Irfan24@gmail.com" },
        });
        fireEvent.submit(screen.getByText("Submit"));

        expect(window.alert).toBeCalledWith(`Data Pendaftar "Irfan" Berhasil Diterima`);
        // expect(screen.getByRole("textbox", { name: /nama/i }).value).toBe("Irfan");
        // expect(screen.getByRole("textbox", { name: /email/i }).value).toBe("Irfan24@gmail.com");
    });

    test("Testing submit form dengan inputan yang salah", () => {
        render(<NameForm />);
        jest.spyOn(window, 'alert').mockImplementation(() => {})

        fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), 
            {target: { value: "Irf4n" },
        });
        fireEvent.input(screen.getByRole("textbox", { name: /email/i }), 
            {target: { value: "Irfan24" },
        });
        fireEvent.submit(screen.getByText("Submit"))
        
        expect(window.alert).toBeCalledWith("Data Pendaftar Tidak Sesuai")
        expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
        expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /nama/i }).value).toBe("Irf4n");
        expect(screen.getByRole("textbox", { name: /email/i }).value).toBe("Irfan24");        
    });
    
})