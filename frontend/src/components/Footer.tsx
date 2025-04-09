// import React from "react";

interface FooterProps {
    year: string,
    name: string
}

function Footer(props: FooterProps) {
    const { year, name } = props;
    return ( 
        <>
            <footer className="w-full bg-gray-800 text-white py-6">
                <p className="text-center">
                &copy; {year} {name}. All rights reserved.
                </p>
            </footer>
        </>
     );
}

export default Footer;