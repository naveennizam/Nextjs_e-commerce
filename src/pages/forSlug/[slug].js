import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css'

const Slug = (props) => {

    const data = props.productCode.slug;

    const [a, setPremiumPiece] = useState();
    const [icr, setInc] = useState(1);


    function incrementQty() {
        var value = document.querySelector('button').value;
        var cardQty = document.querySelector(".cartqty");
        value = isNaN(value) ? 1 : value;
        value++;
        document.querySelector('button').value = value;
        //cardQty.= value;

        //  cardQty.classList.add("rotate-x");
    }

    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 4) {
            setNum(Number(num) + 1);
        }
        if (num == 4) { alert(' It has only 4 set') }
    };
    let decNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    useEffect(() => {
        const getData = async () => {
            try {

                await fetch(`/api/getslug?prodCode=${data}`, {
                    method: "GET",
                }).then((res) => res.json())
                    .then(db => {

                        setPremiumPiece(db)
                    })
            }
            catch (err) {
                console.log(err);
            }
        }
        getData()

    }, [])

console.log(a);
    return <main id={styles.maindiv} >

        <div className="card my-5 mx-4 shadow-lg bg-white rounded" style={{ width: "18rem" }} id={styles.maindiv1}>
            <img src={a && a.image} className="card-img-top" alt="..." />

        </div>
        <div id={styles.maindiv2}>

            <h3 className="card-text" id={styles.para}>{a && a.prodName}</h3>
            <h6 className="card-title">{a && a.prodCode}</h6>
            <p className="card-text" id={styles.price}>PKR {a && a.prodPrice}</p>


            <div id={styles.maindivbt}>
                <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <button id={styles.bt} type="button" onClick={decNum}>-</button>
                    <input type="text" className="form-control" id="inputPassword2" value={num} onChange={handleChange} />
                    <button id={styles.bt} type="button" onClick={incNum}>+</button>
                </div>
            </div>


            <button type="button" className="btn btn-secondary btn-lg mx-3" onClick={incrementQty}>Add To Cart</button>
        </div>

    </main>
}


export default Slug



export const getServerSideProps = async (context) => {
    console.log('context', context.query);
    const productCode = context.query;
    return { props: { productCode } };
};

