import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'



export const contactData = [
    {
        name: "Address",
        icon: <FontAwesomeIcon icon={faAddressBook} />,
    },
    {
        name: "Phone Number",
        icon: <FontAwesomeIcon icon={faPhone} />,
    },
    {
        name: "Email",
        icon: <FontAwesomeIcon icon={faEnvelope} />,
    }
]

export const socialMedia = [
    {
        name: "Instragram",
        icon: <FontAwesomeIcon icon={faInstagram} />
    },
    {
        name: "Facebook",
        icon: <FontAwesomeIcon icon={faSquareFacebook} />
    },
    {
        name: "Twitter",
        icon: <FontAwesomeIcon icon={faTwitter} />
    }
]