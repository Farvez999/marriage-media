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

            title: [{
                priviledgesName: data.priviledgesName,
                priviledgesOption: data.priviledgesOption,
            }],
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





    }
    if (loader) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card-body">
                <h1 className='text-3xl font-bold text-center my-5'>Add Priviledges</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Priviledges Name</span>
                            </label>
                            <select className={errors.package ? 'input-bordered input-error select select-bordered w-full' : 'select select-bordered w-full'} {...register("priviledgesName", {
                                required: "Priviledges Name is required",
                            })}>
                                <option>Include in search results.</option>
                                <option>Top Position in search results.</option>
                                <option>Perform extended search.</option>
                                <option>Send message to mailbox.</option>
                                <option>Number of messages to keep.</option>
                                <option>Number of days a message can be kept.</option>
                                <option>Number of messages which can be sent per day.</option>
                                <option>Upload pictures</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Priviledges Option</span>
                            </label>
                            <select className={errors.package ? 'input-bordered input-error select select-bordered w-full' : 'select select-bordered w-full'} {...register("priviledgesOption")}>
                                <option>Yes</option>
                                <option>No</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>

                    </div>



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