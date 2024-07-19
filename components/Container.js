import classNames from "classnames";

export default function Container({ children, className }) {
    return <div className={classNames('container mx-auto px-4 md:px-20 flex-1', className)}>{children}</div>
}
