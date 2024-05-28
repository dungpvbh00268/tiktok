import clsx from "clsx"
import styles from "./Button.module.scss"

function Button({ primary, secondary, success, danger, warning, info, light, dark, link, disabled }) {
    const classes = clsx(styles.btn, 'd-flex', {
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.success]: success,
        [styles.danger]: danger,
        [styles.warning]: warning,
        [styles.info]: info,
        [styles.light]: light,
        [styles.dark]: dark,
        [styles.link]: link,
        [styles.disabled]: disabled,
    })
    return (
        <>
            <button className={classes}>Click me!</button>
        </>
    )
}
export default Button