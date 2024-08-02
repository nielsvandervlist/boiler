import Card from "@components/UI/Card";

export default function SubscriptionCards() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container grid gap-8 px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Pricing</div>
                    <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">Choose the plan that fits your needs</h2>
                    <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                        Simple and transparent pricing to help your business grow.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <h2 className={'card-title'}>Starter</h2>
                        <p>Perfect for individuals and small teams.</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold">$9</span>
                            <span className="text-muted-foreground">/month</span>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary"/>
                                1 user
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary"/>
                                5 GB storage
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary"/>
                                Basic analytics
                            </li>
                        </ul>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </Card>
                    <Card>
                        <h2 className={'card-title'}>Starter</h2>
                        <p>Perfect for individuals and small teams.</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold">$9</span>
                            <span className="text-muted-foreground">/month</span>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary"/>
                                1 user
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary"/>
                                5 GB storage
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary"/>
                                Basic analytics
                            </li>
                        </ul>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </Card>
                    <Card>
                        <h2 className={'card-title'}>Starter</h2>
                        <p>Perfect for individuals and small teams.</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold">$9</span>
                            <span className="text-muted-foreground">/month</span>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary"/>
                                1 user
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary"/>
                                5 GB storage
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary"/>
                                Basic analytics
                            </li>
                        </ul>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}

function CheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5"/>
        </svg>
    )
}


function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    )
}