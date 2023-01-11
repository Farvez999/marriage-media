import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Pages/Shared/Loader/Loading';

const AddPriviledges = () => {

    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loader, setLoader] = useState(false)
    const [isloader, setIsloader] = useState(false)
    const [author, setAuthor] = useState({});
    const email = user?.email;

    const navigate = useNavigate()

    const { data: packages = [], isLoading } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/packages`)
            const data = await res.json()
            return data

        }
    })

    useEffect(() => {
        setLoader(true)
        fetch(`http://localhost:5000/users/${email}`)
            .then(res => res.json())
            .then(data => { return (setAuthor(data), setLoader(false)) })
    }, [email])

    console.log(author)


    const onSubmit = (data) => {
        setIsloader(true)
        // const imageHostKey = process.env.REACT_APP_IMAGE_BB_KEY;

        const addPriviledges = {
            title: [data.title],
            package: data.package,
            email: author.email,
            author: author,
        }

        fetch(`http://localhost:5000/addPriviledges`, {
            method: 'PATCH',
            headers: {

                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(addPriviledges)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data);
                    setIsloader(false)
                    toast.success('Your Priviledges added successfully')
                    navigate('/dashboard')
                }
            })
            .catch(error => { toast.error(error.message); setIsloader(false) })


        // const image = data.img[0];
        // const formData = new FormData();
        // formData.append('image', image);

        // fetch(`https://api.imgbb.com/1/upload?key=1faa49df03df506c6697717902b0f372`, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgData => {
        //         if (imgData.success) {

        //             // const addPackage = {
        //             //     img: imgData.data.url,
        //             //     price: data.price,
        //             //     title: data.title,
        //             //     email: author.email,
        //             //     description: data.description,
        //             //     author: author,
        //             // }

        //             // fetch(`http://localhost:5000/addPackage`, {
        //             //     method: 'POST',
        //             //     headers: {

        //             //         'content-type': 'application/json',
        //             //         authorization: `bearer ${localStorage.getItem('accessToken')}`

        //             //     },
        //             //     body: JSON.stringify(addPackage)
        //             // })
        //             //     .then(res => res.json())
        //             //     .then(data => {
        //             //         if (data.acknowledged) {
        //             //             console.log(data);
        //             //             setIsloader(false)
        //             //             toast.success('Your Package added successfully')
        //             //             navigate('/dashboard/sellerProducts')
        //             //         }
        //             //     })
        //             //     .catch(error => { toast.error(error.message); setIsloader(false) })
        //         }
        //     });


    }
    if (loader) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card-body">
                <h1 className='text-5xl font-bold text-center my-5'>Add A Priviledges</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Package Priviledges</span>
                            </label>
                            <input type="text" placeholder="Product Name" {...register("title", {
                                required: "Name is required"

                            })} className="input input-bordered" />
                        </div>


                    </div>

                    {/* <div className="form-control mt-5">
                        <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">Select Package Icon</label>
                        <input className="form-control
                        block
                        w-full
                        px-3
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

                    </div> */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Package</span>
                        </label>
                        <select className={errors.package ? 'input-bordered input-error select select-bordered w-full' : 'select select-bordered w-full'} {...register("package", {
                            required: "Specialty is required",
                        })}>
                            {
                                packages.map(pac => <option
                                    key={pac._id}
                                    value={pac.title}
                                >{pac.title}</option>)
                            }

                        </select>
                    </div>



                    <div className="form-control mt-6">
                        <button type='submit' className={isloader ? 'btn btn-neutral loading' : 'btn btn-neutral'}>
                            {isloader ? 'Loading' : 'Add Package'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPriviledges;