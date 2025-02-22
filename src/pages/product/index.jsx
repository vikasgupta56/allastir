import Section1 from '@/components/product/Section1'
import Footer from '@/components/footer/Footer'
import React, { useEffect, useRef } from 'react'
import Section2 from '@/components/product/Section2'
import Navbar from '@/components/navbar/Navbar'
import gsap from 'gsap'

const Product = () => {
  const productData = [
    {
      title: "ANTI-DIABETIC",
      product: [
        {
          name: "Voglibose JP ",
          description: "CAS No 83480-29-9",
          image: ""
        },
        {
          name: "Lobeglitazone Sulphate",
          description: "CAS No763108-62-9",
          image: ""
        }
      ]
    },
    {
      title: "ANTI-FUNGAL",
      product: [
        {
          name: "Amoralfine HCL",
          description: "CAS No 78613-38-4",
          image: ""
        },
        {
          name: "Posaconazole",
          description: "CAS No 171228-49-2",
          image: ""
        },
        {
          name: "Naftifine Hcl",
          description: "CAS No 65473-14-5",
          image: ""
        },
      ]
    },
    {
      title: "ANTI-VIRAL",
      product: [
        {
          name: "Dolutegravir Sodium",
          description: "CAS No 1051375-19-9",
          image: ""
        },
        {
          name: "Inosine Pranobex",
          description: "CAS No 36703-88-5",
          image: ""
        }
      ]
    },
    {
      title: "DIURETICS",
      product: [
        {
          name: "Torsemide USP",
          description: "CAS No 56211-40-6 ",
          image: ""
        }
      ]
    },
    {
      title: "HYPER URICEMIA",
      product: [
        {
          name: "Topiroxostat",
          description: "CAS No 577778-58-6",
          image: ""
        }
      ]
    },
    {
      title: "ANTI-SPASMODIC",
      product: [
        {
          name: "Valethemate Bromide",
          description: "CAS No 90-22-2",
          image: ""
        }
      ]
    },
    {
      title: "POLYCYSTIC OVARIAN (PCOS)",
      product: [
        {
          name: "D-Chiro Inositol",
          description: "CAS No 643-12-9",
          image: ""
        }
      ]
    },
    {
      title: "RHEUMATOID ARTHRITIS",
      product: [
        {
          name: "Iguratimod",
          description: "CAS No 123663-49-0",
          image: ""
        }
      ]
    },
    {
      title: "NON-VALVULAR ARTRIAL FIBRILLATION",
      product: [
        {
          name: "Rivaroxaban",
          description: "CAS No 366789-02-8",
          image: ""
        }
      ]
    },
    {
      title: "IDIOPATHIC PULMANARY FIBROSIS(IPF)",
      product: [
        {
          name: "Perfenidone BP",
          description: "CAS No 53179-13-8",
          image: ""
        }
      ]
    },
    {
      title: "ANTI-BACTERIAL",
      product: [
        {
          name: "Linezolid",
          description: "CAS No 165800-03-3",
          image: ""
        }
      ]
    },
    {
      title: "ANTI-PLATELET",
      product: [
        {
          name: "Cilostazol",
          description: "CAS No 73963-72-1",
          image: ""
        }
      ]
    },
    {
      title: "ALPHA-BLOCKER",
      product: [
        {
          name: "Silodosin",
          description: "CAS No 160970-54-7",
          image: ""
        }
      ]
    },
    {
      title: "ANTI-CONVULSANTS",
      product: [
        {
          name: "Cenobamate",
          description: "CAS No 913088-80-9",
          image: ""
        }
      ]
    },
    {
      title: "ANTI-INFLAMMATORY",
      product: [
        {
          name: "Polydatin",
          description: "CAS No 65914-17-2",
          image: ""
        }
      ]
    },
    {
      title: "NUTRACEUTICAL & FOOD SUPPLEMENT",
      product: [
        {
          name: "L-Methylfolate/Calcium-L-5-methyl tetrahydrofolate",
          description: "CAS No 151533-22-1",
          image: ""
        },
        {
          name: "(6S)-L-5methyltetrahydrofolic acid, glucosamine salt",
          description: "CAS No 1181972-37-1 ",
          image: ""
        },
        {
          name: "Calcium Folinate/Leucovorin Calcium USP",
          description: "CAS No 1492-18-8",
          image: ""
        },
        {
          name: "Vitamin K2-7/Menaquinone-7 USP",
          description: "CAS No 2124-57-4 ",
          image: ""
        },
        {
          name: "Pyridoxal-5-phosophate ",
          description: "CAS No 54-47-7",
          image: ""
        },
        {
          name: "Rutin Trihydrate",
          description: "CAS No 250249-75-3 ",
          image: ""
        },
        {
          name: "Ubidecarenone",
          description: "CAS No 303-98-0",
          image: ""
        },
        {
          name: "Ubiquinol acetate",
          description: "CAS No 992-78-9",
          image: ""
        },
        {
          name: "Tocopherol Polyethylene Glycol Succinate ",
          description: "CAS No 9002-96-4",
          image: ""
        },
        {
          name: "Palmitoyl ethanolamide ",
          description: "CAS No 544-31-0",
          image: ""
        },
        {
          name: "Oleoyl ethanolamide",
          description: "CAS No 111-58-0 ",
          image: ""
        },
        {
          name: "Luteolin",
          description: "CAS No 491-70-3",
          image: ""
        }
      ]
    },
    {
      title: "ANTI-ULCER",
      product: [
        {
          name: "Troxipide",
          description: "CAS No 30751-05-4",
          image: ""
        }
      ]
    },
    {
      title: "ANTI-FUNGAL ",
      product: [
        {
          name: "Isavuconazonium Sulfate",
          description: "CAS No 946075-13-4",
          image: ""
        },
        {
          name: "Fosravuconazole L-lysinate Ethanolate",
          description: "CAS No 914361-45-8",
          image: ""
        },
        {
          name: "Isavuconazole",
          description: "CAS No 241479-67-4",
          image: ""
        },
        {
          name: "Fosravuconazole",
          description: "CAS No 351227-64-0",
          image: ""
        }
      ]
    },
    {
      title: "ANTI-BACTERIAL",
      product: [
        {
          name: "Fosfomycin Trometamol ",
          description: "CAS No 78964-85-9",
          image: ""
        }
      ]
    },
    {
      title: "TREATMENT OF EPILEPSY",
      product: [
        {
          name: "Brivaracetam",
          description: "CAS No 357336-20-0 ",
          image: ""
        }
      ]
    },
  ]
  const navRef = useRef(null)
  const sec1Ref = useRef(null)
  const sec2Ref = useRef(null)

  useEffect(() => {
    gsap.set(sec1Ref.current, { opacity: 0 })
    gsap.set(sec1Ref.current.querySelector("h2"), { y: "100%" })
    gsap.set(sec2Ref.current, { y: "80",opacity:0 })
    gsap.set(navRef.current, { y: "-100%" })
    var tl = gsap.timeline()
    tl
      .to(sec1Ref.current, {
        opacity: 1,
        duration: .8,
        ease: "power4.in",
      })
      .to(navRef.current, {
        y: 0,
        duration: .6
      })
      .to(sec1Ref.current.querySelector("h2"), {
        y: 0,
        duration: .5
      },"a")
      .to(sec2Ref.current, {
        y: 0,
        opacity:1,
        duration: .5,
        delay:.3
      },"a")

    return () => {
      tl.kill();
    };
  }, [])


  return (
    <div className='w-full relative overflow-hidden'>
      <Navbar navRef={navRef} />
      <Section1 sec1Ref={sec1Ref} />
      <div ref={sec2Ref} className='pb-[5vw]'>
        {
          productData.map((data, i) => <Section2 key={i} data={data} />)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Product