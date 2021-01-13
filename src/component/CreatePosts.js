import '../css/createPosts.css';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import createPost from './reducers/action'

function CreatePosts(props) {

    const {register,handleSubmit} = useForm();

    function onSubmit(data){
        props.createPost(data);
    }
    

    return (
        <div>
            <div>
                <div class="card " style={{width: "35rem",height:"22rem",marginTop:"4rem",marginLeft:"30%"}}>
                     <div class="card-body">
                     <form style={{marginLeft:'30%'}} onSubmit={handleSubmit(onSubmit)}>
                        <p class="card-text">Enter you name</p>
                        <input required ref={register} name='firstname'/>
                        <p class="card-text">Enter your's user name</p>
                        <input required ref={register} name='userName'/>
                        <p class="card-text">Enter the text</p>
                        <textarea required ref={register} name='text'/>
                        <br/>
                        <button className="btn btn-primary" style={{width:'5rem',border:'none',marginLeft:'25%',marginTop:'2rem'}}>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapToDispatchToProps = {
    createPost
}

export default connect(null,mapToDispatchToProps)(CreatePosts);