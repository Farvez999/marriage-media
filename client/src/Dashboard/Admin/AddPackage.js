import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Pages/Shared/Loader/Loading';

const AddPackage = () => {

    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loader, setLoader] = useState(false)
    const [isloader, setIsloader] = useState(false)
    const [author, setAuthor] = useState({});
    const email = user?.email;

    const navigate = useNavigate()


    useEffect(() => {
        setLoader(true)
        fetch(`https://used-products-resale-server-vert.vercel.app/users/${email}`)
            .then(res => res.json())
            .then(data => { return (setAuthor(data), setLoader(false)) })
    }, [email])

    console.log(author)


    const onSubmit = (data) => {
        setIsloader(true)
        // const imageHostKey = process.env.REACT_APP_IMAGE_BB_KEY;


        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=1faa49df03df506c6697717902b0f372`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const addPackage = {
                        img: imgData.data.url,
                        price: data.price,
                        title: data.title,
                        email: author.email,
                        description: data.description,
                        author: author,
                    }

                    fetch(`http://localhost:5000/addPackage`, {
                        method: 'POST',
                        headers: {

                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`

                        },
                        body: JSON.stringify(addPackage)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                console.log(data);
                                setIsloader(false)
                                toast.success('Your Package added successfully')
                                navigate('/dashboard/sellerProducts')
                            }
                        })
                        .catch(error => { toast.error(error.message); setIsloader(false) })
                }
            });


    }
    if (loader) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div>
                <div className="card-body">
                    <h1 className='text-3xl font-bold text-center my-5'>Create Packages</h1>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Package Name</span>
                                </label>
                                <input type="text" placeholder="Product Name" {...register("title", {
                                    required: "Name is required"

                                })} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Package Price</span>
                                </label>
                                <input type="text" placeholder="Price" {...register("price", {
                                    required: "Price is required"

                                })} className="input input-bordered" />
                                
                            </div>

                        </div>

                        <div className="form-control mt-5">
                            <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700 text-left">Select Package Icon</label>
                            <input className="form-control
                            block
                            w-full
                            px-2
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                type="file"
                                {...register("img", {
                                    required: "img is required",
                                })}
                                id="formFile" />

                        </div>

                        <div className="form-control mt-5">
                            <label className="label">
                                <span className="label-text inline-block mb-2 text-gray-700">Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" {...register("description")} placeholder="Description..."></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className={isloader ? 'btn btn-neutral loading' : 'btn btn-neutral'}>
                                {isloader ? 'Loading' : 'Add Package'}
                                
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;