import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreTeam = () => {
    // Process team members data with formatted image URLs
    const teamMembers = [
        {
            id: 26,
            name: "Prof. Alok Kumar Das",
            role: "Dean IIE (IIT Dhanbad)",
            bio: "",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/v1740946473/Screenshot_2025-03-03_012601_d6owsa.png",
            social: {
                email: ""
            }
        },
        {
            id: 26,
            name: "Prof. Sourav Srivastava",
            role: "Faculty Advisor (Hackfest '25)",
            bio: "",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/v1740946743/Screenshot_2025-03-03_014833_dmj06y.png",
            social: {
                email: ""
            }
        },
        {
            id: 7,
            name: "Manav Sharma",
            role: "Technical",
            bio: "Manages the technical infrastructure and provides support during the event.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/v1740914307/ManavSharma_ecbrfp.jpg",
            social: {
                email: "22je0539@iitism.ac.in"
            }
        },
        {
            id: 1,
            name: "Aaditya Jain",
            role: "Sponsorship and Marketing",
            bio: "Responsible for securing partnerships and promoting the hackathon to participants.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/v1740914306/AadityaJain_eulfm8.jpg",
            social: {
                email: "22je0003@iitism.ac.in"
            }
        },
        {
            id: 2,
            name: "Abhinav Aditya",
            role: "Operations & Logistics Team",
            bio: "Ensures smooth execution of all hackathon activities and manages event logistics.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1740914306/Abhinavaditya_wtdqz0.jpg",
            social: {
                email: "22je0021@iitism.ac.in"
            }
        },
        {
            id: 3,
            name: "Aditi Singh",
            role: "Sponsorship and Marketing",
            bio: "Works on building relationships with sponsors and creating marketing strategies.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/v1740914305/AditiSingh_vhsump.jpg",
            social: {
                email: "22je0046@iitism.ac.in"
            }
        },
        {
            id: 4,
            name: "Aman Agrawal",
            role: "Sponsorship Team",
            bio: "Focuses on securing financial support and resources for the hackathon.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1740914305/AmanAgrawal_frtjqu.jpg",
            social: {
                email: "22je0092@iitism.ac.in"
            }
        },
        {
            id: 5,
            name: "Ashvery Kumar Saini",
            role: "Advisor",
            bio: "Provides strategic guidance and mentorship to the organizing team.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/v1740914308/AshveryKumarSaini_kmuvor.jpg",
            social: {
                email: "21JE0188@iitism.ac.in"
            }
        },
        {
            id: 6,
            name: "Kchitiz Raj",
            role: "Operations",
            bio: "Manages operational aspects of the hackathon to ensure a seamless experience.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1740914307/KchitizRaj_uip7c5.jpg",
            social: {
                email: "22je0469@iitism.ac.in"
            }
        },
        {
            id: 8,
            name: "Mihir",
            role: "Marketing",
            bio: "Develops and implements marketing strategies to reach potential participants.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1740914307/Mihir_jwazth.jpg",
            social: {
                email: "22je0569@iitism.ac.in"
            }
        },
        {
            id: 9,
            name: "Mihir Kotadiya",
            role: "Finance",
            bio: "Handles financial planning and budget management for the hackathon.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/v1740914308/MihirKotadiya_cciktb.jpg",
            social: {
                email: "22je0490@iitism.ac.in"
            }
        },
        {
            id: 10,
            name: "Pranav Jha",
            role: "Sponsorship",
            bio: "Works on securing sponsorships and partnerships for the event.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/v1740914307/PranavJha_jcgkk8.jpg",
            social: {
                email: "22je0711@iitism.ac.in"
            }
        },
        {
            id: 11,
            name: "Rohan Kumar",
            role: "Sponsorship",
            bio: "Builds relationships with industry partners to support the hackathon.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/v1740914306/Team_83_crlwh5.jpg",
            social: {
                email: "22je0817@iitism.ac.in"
            }
        },
        {
            id: 12,
            name: "Rukhsar",
            role: "Advisor",
            bio: "Provides guidance based on previous experience organizing successful hackathons.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1740914307/Rukhsarfiza_t2wbpw.jpg",
            social: {
                email: "21je0787@iitism.ac.in"
            }
        },
        {
            id: 13,
            name: "Sagnik Pal",
            role: "Sponsorship and Marketing",
            bio: "Coordinates marketing efforts and sponsorship outreach for maximum impact.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1740914306/SagnikPal_wfidpp.jpg",
            social: {
                email: "22je0841@iitism.ac.in"
            }
        },
        {
            id: 14,
            name: "Saloni Dixit",
            role: "Media and Design",
            bio: "Creates visual assets and manages social media presence for the hackathon.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1740914306/SaloniDixit_uoihyv.jpg",
            social: {
                email: "22je0849@iitism.ac.in"
            }
        },
        {
            id: 15,
            name: "Saransh Shivhare",
            role: "Tech",
            bio: "Handles technical setup and troubleshooting for participants during the hackathon.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1740914306/SaranshShivhare_thxh1e.jpg",
            social: {
                email: "22je0867@iitism.ac.in"
            }
        },
        {
            id: 16,
            name: "Shruti Sinha",
            role: "Finance",
            bio: "Oversees budget planning and financial management for the event.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/v1740914305/ShrutiSinha_svd3yb.jpg",
            social: {
                email: "22je0932@iitism.ac.in"
            }
        },
        {
            id: 17,
            name: "Siddharth Gorai",
            role: "Operations",
            bio: "Coordinates operational activities to ensure a successful hackathon experience.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/v1740914305/SiddharthGorai_yzfmlp.jpg",
            social: {
                email: "22je0951@iitism.ac.in"
            }
        },
        {
            id: 18,
            name: "Subham Dey",
            role: "Ops & Logistics",
            bio: "Manages logistics and operational aspects of the hackathon venue and schedule.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/v1740914304/SubhamDey_yufcch.jpg",
            social: {
                email: "22je0983@iitism.ac.in"
            }
        },
        {
            id: 19,
            name: "Alok Raj",
            role: "Sponsorship Team",
            bio: "Works on securing resources and partnerships to enhance the hackathon experience.",
            imageUrl: "https://res.cloudinary.com/dcapq8uyk/image/upload/v1740914305/AlokRaj_fhryfc.jpg",
            social: {
                email: "22je0091@iitism.ac.in"
            }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-black py-16 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
                        Meet Our <span className="bg-gradient-to-r from-red-800  to-blue-500 text-transparent bg-clip-text">Core Team</span>
                    </h1>
                    <p className="text-lg text-gray-300">
                        The passionate individuals behind HACKFEST'25, working tirelessly to create an unforgettable experience for all participants.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            className="bg-zinc-900 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 border border-zinc-800"
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="relative h-64 w-full">
                                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-0 w-full p-4">
                                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                    {member.id === 26 && (<p className="text-primary font-medium bg-gradient-to-r from-red-800 via-blue-500 to-white text-transparent bg-clip-text">{member.role}</p>)}
                                </div>
                            </div>
                            <div className="p-6">
                                {/* <p className="text-gray-300 mb-4">{member.bio}</p> */}
                                {member.social.email && (
                                    <div className="flex space-x-4">
                                        <a
                                            href={`mailto:${member.social.email}`}
                                            className="text-gray-400 hover:text-red-400 transition-colors"
                                        >
                                            <Mail size={20} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};


export default CoreTeam;;