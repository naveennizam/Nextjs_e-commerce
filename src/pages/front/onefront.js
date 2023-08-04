import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Onepiece = () => {
    const [onePiece, setOnePiece] = useState([])
    const getData =async () => {
        try {
             fetch(`/api/onePiece`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: `GET`,
            }).then((res) => (res.json())
                .then((db) => { setOnePiece(db) })
            )
        }
        catch (err) {
            console.log(err);
        };
    }

    useEffect(() => {
        getData()
    }, [])

    return <main >
        <div className='d-flex justify-content-evenly flex-wrap'>
            {onePiece.length > 0 &&
                onePiece.map((blogitem) => {
                    return (
                      
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



export default Onepiece