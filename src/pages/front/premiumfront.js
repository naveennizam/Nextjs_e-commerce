import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Paginate from '../../../Components/pagination'
import ReactPaginate from 'react-paginate';
import Pagination from '@mui/material/Pagination';
import { useParams } from 'react-router-dom';
import { useRouter } from "next/router";
import IconButton from '@mui/material/IconButton';
import { useRef } from 'react';
import history from 'history';
import Typography from '@mui/material/Typography'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextField from '@mui/material/TextField';

import { makeStyles } from "@material-ui/core/styles"


import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles(theme => ({
    customHoverFocus: {
        "&:hover, &.Mui-focusVisible": { backgroundColor: "#fc433f" }
    }
}));





const PremiumDress = (props) => {

    const classes = useStyles();

    const [premiumPiece, setPremiumPiece] = useState([]);
    const [count, setcount] = useState()
    let [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    let currentPosts = premiumPiece.slice(0, postsPerPage);


    const router = useRouter();

    useEffect(() => {

        setCurrentPage(router.query.page);

    }, [router.query.page]);

    const paginated = (event, value) => {
        console.log('value', value);
        router.push({
            pathname: '/front/premiumfront',
            query: { page: `${value}` },
        })
        setCurrentPage(value)
    };

    const getData = async () => {
        try {

            await fetch("/api/premiumPiece?" + new URLSearchParams({
                page: `${currentPage}`, limit: `${postsPerPage}`, skip: `${currentPage * postsPerPage - postsPerPage}`
            }), {
                method: "GET",
            }).then((res) => res.json())
                .then(db => {
                    setcount(db.count);
                    setPremiumPiece(db.data)
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getData()

    }, [currentPage])

    return (
        <div>
            <div className='d-flex justify-content-evenly flex-wrap' >
                {currentPosts.length > 0 &&
                    currentPosts.map((blogitem) => {
                        return (
                            <div key={blogitem.ProductId} >
                                <div className="card my-5 mx-4 shadow-lg bg-white rounded" style={{ width: "18rem" }}>
                                    <Link href={{
                                        pathname: `/forSlug/${blogitem.prodCode}`
                                    }} className={styles.onefront}>

                                        <img src={blogitem.image} className="card-img-top" alt="..." />
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{blogitem.prodName}</h5>
                                        <p className="card-text" id={styles.para}>{blogitem.prodCode}</p>
                                        <p className="card-text" id={styles.para}>{blogitem.slug}</p>
                                        <p className="card-text fw-bold" id={styles.para}>Rs. {blogitem.prodPrice}</p>

                                        <TextField id="outlined-basic" className={classes.customHoverFocus} label="Outlined" variant="outlined" />

                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>

            <div style={{ position: 'absolute', right: '100px' }}>
                <Pagination
                    onChange={paginated}
                    count={Math.ceil(count / postsPerPage)}
                    color="secondary"
                    defaultPage={1}

                />
            </div>
        </div >
    )

}
export default PremiumDress

export const getServerSideProps = async (context) => {

    const page = (context.req.headers.referer) //previous Page URL

    return { props: { page } };
};