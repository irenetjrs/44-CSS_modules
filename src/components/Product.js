import React from "react";
import styles from './Product.module.scss'
import iphone from '../assets/iphone.jpg'
import watch from '../assets/watch.jpg'
import randomFoto from '../assets/randomFoto.jpg'

function Product(props){

    const remove = () => {
        props.onRemove(props.id)
    }
    let photoCoice = randomFoto;
        if(props.name.toLowerCase() === 'iphone'){
            photoCoice = iphone;
        }else if(props.name.toLowerCase() === 'watch'){
            photoCoice = watch;
        }

    return (
        <div className={styles.product}>
            <div className={styles.img}>
                <img src={photoCoice}/>
            </div>

            <div className={styles.body}>
                <h1 className={styles.title}>{props.name}</h1>
                <div className={styles.price}>{props.price}</div>
            </div>
            <button 
            onClick={remove} 
            type="button"
            >
                Remove
            </button>
        </div>
    )
}

export default Product;