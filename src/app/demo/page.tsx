import * as React from "react";

interface Props {}

export default function page(props: Props) {
  return (
    <>
      <section id="home" className="bg-white py-16">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
            <h2 className="mb-4 text-5xl font-bold">
              Free <span className="text-primary">Tailwind</span> Template
            </h2>
            <p className="my-7">
              Tailwind CSS is an open source CSS framework. The main feature of
              this library is that, unlike other CSS frameworks like Bootstrap,
              it does not provide a series of predefined classNamees for
              elements such as buttons or tables.
              <br></br>
              <br></br>tady je github <br></br>
              <br></br>
              <a href="https://github.com/spacemadev/elevate-free-tailwind-business-template">
                https://github.com/spacemadev/elevate-free-tailwind-business-template
              </a>
              <br></br>
              <br></br>a tady je demo{" "}
              <a href="https://spacema-dev.com/elevate/">
                https://spacema-dev.com/elevate/
              </a>
            </p>
            <div className="space-x-2">
              <a
                href="/"
                className="inline-block rounded-full bg-primary px-4 py-2 font-semibold text-white hover:bg-secondary"
              >
                Download
              </a>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="/assets/images/1.jpg"
              alt="Image"
              className="w-full rounded-lg bg-gray-100 shadow-lg md:mx-auto md:max-w-md"
            />
          </div>
        </div>
      </section>
      <section id="aboutus" className="bg-gray-500 py-16">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <img
              src="/assets//images/2.jpg"
              alt="Image"
              className="w-full rounded-lg bg-gray-100 shadow-lg md:mx-auto md:max-w-md"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="mb-4 text-5xl font-bold text-white">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="my-5 text-white">
              At Our company, we follow a well-defined process to ensure the
              success of every project. Our approach is tailored to meet your
              unique requirements and deliver outstanding outcomes consistently.
            </p>
            <ol className="mb-10 mt-5 list-outside">
              <li className="mb-4 flex items-center">
                <strong className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                  1
                </strong>
                <span className="text-white">
                  We start by conducting a thorough analysis of your needs and
                  goals.
                </span>
              </li>
              <li className="mb-4 flex items-center">
                <strong className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                  2
                </strong>
                <span className="text-white">
                  Our team collaborates closely with you to craft a customized
                  strategy.
                </span>
              </li>
              <li className="mb-4 flex items-center">
                <strong className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                  3
                </strong>
                <span className="text-white">
                  We execute the plan meticulously, ensuring clear communication
                  throughout the process.
                </span>
              </li>
              <li className="mb-4 flex items-center">
                <strong className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                  4
                </strong>
                <span className="text-white">
                  Regular updates and feedback sessions keep you informed and
                  involved.
                </span>
              </li>
              <li className="mb-4 flex items-center">
                <strong className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                  5
                </strong>
                <span className="text-white">
                  We deliver the final product with precision, meeting your
                  expectations and beyond.
                </span>
              </li>
            </ol>
            <button className="rounded-full bg-primary px-4 py-2 font-semibold text-white hover:bg-secondary">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section id="clients" className="bg-white px-4 py-16">
        <div className="testimonials container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center lg:mb-20">
            <h2 className="mb-4 text-5xl font-bold">
              What <span className="text-primary">Our Clients</span> Say
            </h2>
            <p className="my-7">
              Discover the experiences of our satisfied clients
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mb-12 text-center lg:mb-20">
          <h2 className="mb-4 text-5xl font-bold">
            Discover <span className="text-primary">Our</span> Services
          </h2>
          <p className="my-7">
            Explore our team, portfolio, and learn more about us
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-24">
          <div className="mx-auto grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="p-6">
              <img
                className="mb-8 w-full rounded-xl object-cover object-center"
                src="/assets/images/blog/blog-1.jpg"
                alt="blog"
              />
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-primary">
                Discover Our Story
              </h2>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
                Get to Know Us Better.
              </h1>
              <p className="mx-auto text-base font-medium leading-relaxed text-gray-txt">
                Learn about our journey, values, and mission. Dive into our
                story to understand who we are, what we stand for, and how we
                strive to make a difference.
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="mt-4 inline-flex items-center font-semibold text-primary hover:text-gray-dark lg:mb-0"
                  title="Read Our Story"
                >
                  {" "}
                  Read Our Story »{" "}
                </a>
              </div>
            </div>
            <div className="p-6">
              <img
                className="mb-8 w-full rounded-xl object-cover object-center"
                src="/assets/images/blog/blog-2.jpg"
                alt="blog"
              />
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-primary">
                Our Portfolio
              </h2>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
                Explore Our Creative Projects.
              </h1>
              <p className="mx-auto text-base font-medium leading-relaxed text-gray-txt">
                Discover a collection of our latest projects showcasing our
                expertise in web development, design, and innovation. Dive into
                our portfolio to see how we bring ideas to life.
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="mt-4 inline-flex items-center font-semibold text-primary hover:text-gray-dark lg:mb-0"
                  title="Explore Our Portfolio"
                >
                  {" "}
                  Explore Our Portfolio »{" "}
                </a>
              </div>
            </div>
            <div className="p-6">
              <img
                className="mb-8 w-full rounded-xl object-cover object-center"
                src="/assets/images/blog/blog-3.jpg"
                alt="blog"
              />
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-primary">
                Meet Our Team
              </h2>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
                Discover the Talented Minds Behind Our Success.
              </h1>
              <p className="mx-auto text-base font-medium leading-relaxed text-gray-txt">
                Learn more about the dedicated professionals who make our
                projects possible. Explore their skills, experiences, and
                contributions.
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="mt-4 inline-flex items-center font-semibold text-primary hover:text-gray-dark lg:mb-0"
                  title="Explore Our Team"
                >
                  {" "}
                  Explore Our Team »{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="subscribe" className="bg-primary py-4">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8 lg:flex-row lg:justify-between">
            <div className="mb-4 sm:mb-8 lg:mb-0">
              <h2 className="text-center text-xl font-bold text-white sm:text-2xl lg:text-left lg:text-3xl">
                Stay Updated
              </h2>
              <p className="text-center text-white lg:text-left">
                Subscribe to our newsletter
              </p>
            </div>
            <div className="flex w-96 flex-col items-center lg:items-end">
              <form className="flex w-full gap-2">
                <input
                  placeholder="Enter your email address"
                  className="bg-gray-white w-full flex-1 rounded px-3 py-2 text-gray-txt placeholder-gray-dark focus:outline-none"
                />
                <button className="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-primary  hover:text-secondary md:text-base">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
