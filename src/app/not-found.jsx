import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='error'>
            <h1 className='code'>404</h1>
            <h2 className='desc'>Ops... There's something wrong.</h2>
        </div>
    )
}