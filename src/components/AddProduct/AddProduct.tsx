import React, { useState } from 'react'

export default function AddProduct() {

    type FormDataProduct = {
        title: string,
        price: string,
        count: string
    };

    const [formData, setFormData] = useState<FormDataProduct>({ title: "", price: "", count: "" });

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, name } = event.target;
        const newData: FormDataProduct = { ...formData, [name]: value };
        setFormData(newData);
    }

    const submitHandler = (event: React.FocusEvent): void => {
        event.preventDefault;
    }

    return (
        <div>
            <p>Form to add a product:</p>
            <form>
                <input value={formData.title} type="text" name="title" placeholder="title" onChange={changeHandler} />
                <input value={formData.price} type="text" name="price" placeholder="price" onChange={changeHandler} />
                <input value={formData.count} type="text" name="count" placeholder="count" onChange={changeHandler} />
                <button>Добавить</button>
            </form>
        </div>
    )
}