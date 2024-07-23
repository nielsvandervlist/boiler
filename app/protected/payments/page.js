'use client'
import {useState} from 'react';
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";

export default function Payments() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formValues, setFormValues] = useState({
        amount: 0,
        email: '',
        age: '',
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    function formatValue(val) {
        return `${val * 2}.00`;
    }

    const handlePayment = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/payments/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: formatValue(formValues.amount),
                    currency: 'EUR',
                    description: 'Ticket Pasar Leiden',
                    email: formValues.email,
                    tickets: formValues.amount
                }),
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            window.location.href = data._links.checkout.href;
        } catch (err) {
            setError();
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>{`Payments`}</title>
            </Head>

                <div className={'max-w-lg mx-auto p-8 border-primary border-solid border-[5px] flex flex-col bg-white relative'}>
                    <h1 className={'mb-4 font-bold text-2xl'}>Tickets</h1>
                    <p className={'text-[14px] mb-4'}> Text for ticket.</p>
                    <form>
                        <fieldset className={'flex gap-4 mb-4 flex-col'}>
                            <label>Aantal tickets</label>
                            <input
                                className={'border-primary border-solid border-[2px] p-4'}
                                type="number"
                                name="amount"
                                value={formValues.amount}
                                onChange={handleInputChange}
                            />
                        </fieldset>
                        <fieldset className={'flex gap-4 mb-8 flex-col'}>
                            <label>E-mailadres</label>
                            <input
                                placeholder={'Vul hier uw e-mailadres in'}
                                className={'border-primary border-solid border-[2px] p-4'}
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                            />
                        </fieldset>
                    </form>
                    <button
                        disabled={loading}
                        className={'mt-auto flex items-center ml-auto'}
                        onClick={handlePayment}
                    >
                        Bestel ticket(s)
                        <FontAwesomeIcon className={'ml-4'} icon={faArrowRightLong}/>
                    </button>
                    {error && <p style={{color: 'red'}}>{error}</p>}
                </div>
        </>

    );
};
