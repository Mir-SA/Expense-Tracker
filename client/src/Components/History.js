import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { TransactionList } from "./TransactionList";
// import { Transaction } from './Transaction'

export const History = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction) => (
                    <TransactionList key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    );
};
