import { useRouter } from 'next/router';
const confirmation =(props)=>{
    const router = useRouter();
    console.log("props....",router)
    return(
        <h1>thanks</h1>
    )
}
export default confirmation;