import { Link } from 'react-router-dom';


import Pfp from '../assets/portfolio-pfp.jpg';

const Home = () => {
    return (
        <div className="card border-black mt-5 bg-black">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Pfp} alt="pic" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-light mt-4 text-center">About Me</h5>
                        <p className="card-text text-secondary text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio fuga ullam tempora harum provident recusandae repellendus incidunt rem, ipsam labore corporis asperiores quos distinctio minima deleniti similique qui culpa.</p>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-light mt-4 text-center">Skills</h5>
                        <p className="card-text text-secondary text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio fuga ullam tempora harum provident recusandae repellendus incidunt rem, ipsam labore corporis asperiores quos distinctio minima deleniti similique qui culpa.</p>
                    </div>
                    <div className="card-body mt-5 py-5 d-grid gap-2 col-3 mx-auto">
                        <Link to='/projects' className='btn btn-outline-secondary bg-secondary btn-lg'>
                            <button className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover bg-transparent border border-0'>Check out my work!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
