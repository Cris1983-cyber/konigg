import Demo from "./Carousel";

export default function Info () {
    return (
        <>
        <div id="about" className="w-full bg-[#264F8C] relative mt-auto clear-both" >
            <div className="inset-0 bg-white opacity-25 absolute"></div>
            <div className="container mx-auto px-6 md:px-12 lg:px-32 relative items-center py-32 xl:py-40 text-md sm:text-2xl italic text-white">
                <p>· The work that brings results and creates new opportunities and new moments of joy, inspiring in the child to further explorations in the field of knowledge.</p>
                <br/>
                <p>· The research in the field of child development proves the need for new approaches in the system of knowledge accumulation and the creation of new educational materials.</p>
            </div>
        </div>

        <div className="w-full bg-white text-blue-900 relative mt-auto clear-both" >
            <div className="container mx-auto px-6 md:px-12 lg:px-32 relative items-center py-32 xl:py-40 text-md sm:text-2xl font-light">
                <p>· Physiological peculiarities of the children’s development; the process of discovering the environment; intellectual and creative development through metaforms.</p>
                <br/>
                <p>· Understanding and learning – accessible and comprehensible.</p>
                <br/>
                <p>· The main course includes lessons divided into three difficulty levels and all necessary materials.</p>
            </div>
        </div>

        <div className="w-full bg-white relative mt-auto clear-both" >
            <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="container mx-auto px-6 md:pl-12 lg:pl-32 relative items-center py-32 xl:py-40 text-md sm:text-2xl font-light text-blue-900">
                <p>1. To inspire the child’s love to study and learn.</p>
                <p>2. To discover the child’s inner potential.</p>
                <p>3. To reveal the creative side of the child.</p>
                <p>4. To reach new heights in the development of creative intelligence.</p>
                <p>5. Easy visualization.</p>
                <p>6. To contribute to the child’s personality development.</p>
                <p>7. Oportunity of distance learning.</p>
            </div>
            <div className="container mx-auto px-6 md:pr-12 lg:pr-32 relative items-center py-16 xl:py-20 text-md sm:text-2xl font-light text-blue-900 flex justify-center">
            <iframe className="w-full rounded-xl h-96" src="https://www.youtube.com/embed/rY1zE4_tbQQ" translate="no" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-32 relative items-center py-32 xl:py-40 text-md sm:text-2xl text-blue-900 text-left md:text center">
        <div id="learn1">
            <h2 className="w3-wide"></h2>
            <p></p>
            <p>Learning letters and numbers by association and visualization through the process of creation.</p>
            <p>The study of letters and numbers, words, sentences, math problems with the help of our solution, turns into a fun, yet result-oriented activity. But turning a lesson into an interactive game makes the learning process easy both for teachers and students.</p>
        </div>
        </div>


        <div className="w-full bg-white relative mt-auto clear-both" >
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="container mx-auto px-6 md:pl-12 lg:pl-32 relative items-center py-16 xl:py-20 text-md sm:text-2xl font-light text-blue-900 flex justify-center">
            <iframe className="w-full rounded-xl h-96" src="https://www.youtube.com/embed/YhfnXYinQA8" translate="no" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="container mx-auto px-6 md:pr-12 lg:pr-32 relative items-center py-32 xl:py-40 text-md sm:text-2xl font-light text-blue-900">
           <p className="text-3xl mb-10">The final result</p>
           <p>
            By using the means provided, children excel in the skills of painting and modeling. 
            Through the process of examination and perception, children acquire new knowledge.
            </p>
        </div>
        </div>
        </div>

        <div id="gallery" className="container mx-auto px-6 md:px-12 lg:px-32 relative items-center py-16 xl:py-40 text-md sm:text-2xl font-light text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-blue-900">
        <div className="self-center mb-[76px] ">
        <p>We look forward to all the children from 3 to 12 years old. 
        <br/>The training is free for children with special educational needs.</p>
        </div>
        <Demo/>
        </div>
        </div> 

        <div id="contacts" className="w-full border-t border-[#264F8C] relative mt-auto clear-both" >
            <div className="container mx-auto px-6 md:px-12 lg:px-32 relative items-center pb-32 text-md sm:text-2xl text-[#264F8C] ">
                <div className="text-center p-8">
                    <p className='uppercase text-3xl p-4'>Contacts</p>
                    <p className='opacity-80 italic text-md'>Write to us if you are interested!</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div>
                    <p>International</p>
                    <a href="mailto:office@isak-academy.org">
                    <p>Email: office@isak-academy.org</p>   
                    </a>
                </div>
                </div>
            </div>
        </div>

        
        </>
    )
}