export type Testimonial = {
    id: number;
    quote: string;
    author: string;
    department: string;
    image: string;
    video: string;
};

export const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Caring and Comprehensive Bariatric Care",
        author: "Mr. Chuka Nwokedi",
        department: "Bariatric Surgery",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676005/poster1_q2sbcc_pqcaog.png",
        video: 'https://youtu.be/RvaGBWrTxmI'
    },
    {
        id: 2,
        quote: "Exceptional Service and Professionalism",
        author: "Dr. Money Joy",
        department: "Bariatric Surgery",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676016/poster2_fcb7y8_db6fxd.png",
        video: "https://youtu.be/hILYTADm0Zw"
    },
    {
        id: 3,
        quote: "Doubt Overcome, Health Restored",
        author: "",
        department: "Bariatric Surgery",
        image: "https://res.cloudinary.com/dnycq9llb/image/upload/v1764676016/poster3_luww8t_rddiaq.png",
        video: "https://youtu.be/L-V8gvI-enM"
    }
];
