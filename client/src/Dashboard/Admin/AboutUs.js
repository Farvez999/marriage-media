import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Pages/Shared/Loader/Loading';

const AboutUs = () => {

    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loader, setLoader] = useState(false)
    const [isloader, setIsloader] = useState(false)
    const [author, setAuthor] = useState({});
    const email = user?.email;

    const navigate = useNavigate()


    // useEffect(() => {
    //     setLoader(true)
    //     fetch(`https://used-products-resale-server-vert.vercel.app/users/${email}`)
    //         .then(res => res.json())
    //         .then(data => { return (setAuthor(data), setLoader(false)) })
    // }, [email])

    console.log(author)


    const onSubmit = (data) => {
        setIsloader(true)
        // const imageHostKey = process.env.REACT_APP_IMAGE_BB_KEY;

        const addAboutUs = {
            vision: data.vision,
            mission: data.mission,
            about: data.about,
            email: author.email,
            author: author,
        }

        fetch(`http://localhost:5000/addAboutus`, {
            method: 'POST',
            headers: {

                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(addAboutUs)
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
    if (loader) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div>
                <div className="card-body">
                    <h1 className='text-5xl font-bold text-center my-5'>Add A About Us</h1>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Vision</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" {...register("vision")} placeholder="Write Vision..."></textarea>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mission</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" {...register("mission")} placeholder="Write Mission..."></textarea>
                        </div>


                        <div className="form-control mt-5">
                            <label className="label">
                                <span className="label-text inline-block mb-2 text-gray-700">About Us</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" {...register("about")} placeholder="Write About Us..."></textarea>
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

export default AboutUs;