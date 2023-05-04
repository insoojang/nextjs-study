import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <div className="navbar">
                <Link href="/">home</Link>
                <Link href="/list">list페이지</Link>
            </div>
            <h4 className="title">장인수</h4>
            <p className="title-sub">장인수</p>
        </div>
    )
}
