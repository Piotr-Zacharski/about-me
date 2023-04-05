import React from "react";

import {Tooltip} from "@mui/material";

const logos = [
    { name: 'HTML5', url: '/assets/logos/html.png' },
    { name: 'CSS3', url: '/assets/logos/css-3.png' },
    { name: 'Javascript', url: '/assets/logos/js.png' },
    { name: 'Typescript', url: '/assets/logos/typescript.png' },
    { name: 'React', url: '/assets/logos/atom.png' },
    { name: 'MySQL', url: '/assets/logos/mysql.png' },
    { name: 'Java', url: '/assets/logos/java.png' },
    { name: 'GIT', url: '/assets/logos/github.png' },
    { name: 'Jira', url: '/assets/logos/jira.png' }
];

function Footer() {
    return (
        <div style={{ position: 'fixed', bottom: 10, left: 0, display: 'flex', width: '100%', justifyContent: 'center'}}>
                {logos.map((logo:any) => (
                    <Tooltip key={logo.name} title={logo.name}>
                        <div>
                            <img
                                width={40}
                                height={40}
                                src={logo.url}
                                alt={logo.name}
                                style={{ margin: '0 50px' }}
                            />
                        </div>
                    </Tooltip>
                ))}
        </div>
    );
}

export default Footer;