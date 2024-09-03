export default function Hero() {
    return (
        <div className="bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Streamline Your Workflow</span>{' '}
                            <span className="block text-primary xl:inline">with Our SaaS Solution</span>
                        </h1>
                        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            Boost productivity, enhance collaboration, and drive results with our cutting-edge SaaS platform. Experience the future of work today.
                        </p>
                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <button className={'btn btn-primary'}>
                                        Get started
                                    </button>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <button className={'btn'}>
                                        Live demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <div className="relative block w-full bg-muted rounded-lg overflow-hidden">
                                <img
                                    src="https://placeimg.com/640/480/any"
                                    alt="SaaS platform illustration"
                                    className="w-full"
                                />
                                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                    <svg className="h-20 w-20 text-primary" fill="currentColor" viewBox="0 0 84 84">
                                        <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                                        <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}