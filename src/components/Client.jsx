import React from 'react'
import dataclient from '../data/client.json';

const Client = () => {
    return (
        <section id="client" class="pt-36 pb-32 bg-slate-800 dark:bg-dark transition-all ease-in duration-500">
            <div class="container">
                <div class="w-full px-4">
                    <div class="mx-auto text-center mb-16">
                        <h4 class="font-semibold text-lg text-primary dark:text-primary2 mb-2">Clients</h4>
                        <h2 class="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Yang Pernah Berkerja Sama</h2>
                        <p class="font-medium text-md text-secondary md:text-lg">Client dan Perusahaan yang telah ditangani terhadap kebutuhan, berkomunikasi secara efektif, dan memberikan solusi yang inovatif untuk mencapai hasil yang diinginkan.</p>
                    </div>
                </div>

                <div class="w-full px-4">
                    <div class="flex flex-wrap items-center justify-center">
                        {dataclient.map((card, i) => (
                            <div key={i}>
                                <a href={card.linkclient}>
                                    <img class="max-w-[120px] mx-4 py-4 transition duration-500 hover:scale-110 lg:mx-6 xl:mx-8" src={card.imageclient} alt=""/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client