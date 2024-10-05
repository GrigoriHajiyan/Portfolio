import './style.css'
import gitHubicon from './gitHub-black.svg'
const BtnGithub = ({link}) => {
    return (
        <a href={link} target='_blank' rel='noreferrer' className="btn-outline">
            <img src={gitHubicon} alt="" />
            GitHub repo
        </a>
    );
}

export default BtnGithub