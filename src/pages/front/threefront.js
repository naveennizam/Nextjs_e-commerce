import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const ThreePiece = () => {
    const [threePiece, setThreePiece] = useState([])

    const getData = async () => {
        try {
            await fetch("/api/threePiece", {
                method: "GET",
                headers: { "content-type": "application/json" }
            }).then((res) => res.json())
                .then((db) => { setThreePiece(db) })
        }
        catch (err) { console.log(err); }
    }
    useEffect(() => {
        getData()
    }, [])

    return <main >
        <div className='d-flex justify-content-evenly flex-wrap'>

            {threePiece.length > 0 &&
                threePiece.map((blogitem) => {
                    return (
                        // <div key={blogitem.slug} >
                        <div key={blogitem.slug} >
                            <Link href={`/forSlug/${blogitem.prodCode}`} className={styles.onefront}>
                                <div className="card my-5 mx-4 shadow-lg bg-white rounded" style={{ width: "18rem" }}>
                                    <img src={blogitem.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{blogitem.prodName}</h5>
                                        <p className="card-text" id={styles.para}>{blogitem.prodCode}</p>
                                        <p className="card-text" id={styles.para}>{blogitem.slug}</p>
                                        <p className="card-text fw-bold" id={styles.para}>Rs. {blogitem.prodPrice}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
        </div>
    </main>

} 


export default ThreePiece