// import React from 'react'

import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className="m-0">

      <div className="column p-1">

        <aside className="menu has-text-weight-bold">
          <p className="menu-label">
            General
          </p>
          <ul className="menu-list">
            <li ><Link href="/"><a className={router.pathname == "/" ? "is-active" : ""}>Dashboard</a></Link></li>
            <li><Link href="/hello"><a className={router.pathname == "/hello" ? "is-active" : ""}>Customers</a></Link></li>
          </ul>
          <p className="menu-label">
            Transactions
          </p>
          <ul className="menu-list">
            <li><a>Payments</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
          </ul>
        </aside>

      </div>
    </div>
  )
}
