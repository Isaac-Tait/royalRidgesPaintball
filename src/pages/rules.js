import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Logo from "../app/logoRRP.png";
import Layout from "../app/layout";

import Footer from "../components/Footer";

export default function Rules() {
  return (
    <>
      <div className='flex flex-col min-h-screen bg-[url("https://images.unsplash.com/photo-1561266436-05386f8c5a98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] w-full bg-cover bg-center overflow-hidden'>
        <Head>
          <title>Rules @ Royal Ridges Paintball</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Link
          href="/"
          className="text-6xl font-extrabold text-yellow-400 font-sans bg-green-500 max-w-3xl mx-auto rounded-xl py-4"
        >
          <Image
            src={Logo}
            alt="This is the royal ridges logo"
            height={350}
            className="text-center"
          />
        </Link>
        <div className="flex grow items-center justify-center md:max-w-7xl md:mx-auto md:rounded-lg my-4 px-2 bg-green-500">
          {/* Content */}
          <div className="md:max-w-5xl lg:max-w-7xl font-serif">
            <h1 className="font-bold text-2xl text-center">Paintball Field Rules</h1>
            <h3 className="font-semibold text-xl">Masks to be worn on field</h3>
            <p>
              Paintball masks must stay on at all times while on the field. No
              Exceptions. We reserve the right to require players who violate
              this rule on accident or on purpose to sit out the following
              round.*
            </p>
            <h3 className="font-semibold text-xl">“Freeze”</h3>
            <p>
              If a player has their mask accidentally come off on the field, the
              referees will shout “freeze.” Everyone, players as well as fellow
              referees, are required to repeat this and all players must cease
              firing and safety their markers immediately.
            </p>
            <h3 className="font-semibold text-xl">
              Marker safety devices and etiquette
            </h3>
            <p>
              The barrel blocking devices (barrel bags, barrel socks, etc.) must
              be on the marker barrels, safety buttons engaged, and fingers off
              the trigger before exiting the field. No Exceptions. We reserve
              the right to require players who violate this rule on accident or
              on purpose to sit out the following round. Do not put dirty paint
              or paint that has fallen onto the ground into the marker, this
              will jam the marker.**
            </p>
            <h3 className="font-semibold text-xl">Blindfire</h3>
            <p>
              Blindfire is not allowed on this field. Players must be able to
              see where their paint is hitting.
              <h3>No marker melee</h3>
              Players may not, under any circumstance, throw their marker at, or
              hit another player with their marker. Such behavior will result in
              immediate expulsion from the field. In addition, do not set
              markers on the ground, and keep them off the ground during play.
            </p>
            <h3 className="font-semibold text-xl">Field objects and safety</h3>
            <p>
              Players may not crawl into tight areas, or over objects that raise
              to about the waist or higher. This includes, but is not limited
              to: climbing into tubes on TAC Field, into trees, vaulting over
              windows/barricades, etc. Exception: fallen logs in Woodsball
              Field.{" "}
            </p>
            <h3 className="font-semibold text-xl">Paint breaks/splatter</h3>
            <p>
              Paintballs must break on a player in order for them to be out,
              “bounces” do not count. The spot must be a quarter size or larger,
              so spatter does not count as a hit. Players may call for paint
              checks on themselves by yelling “Paint check!” The player must get
              to cover and wait for a referee to run to them and determine them
              “hit” or “clean”.
            </p>
            <h3 className="font-semibold text-xl">Eliminated players</h3>
            <p>
              Once hit, a player must raise their hand or marker in the air and
              yell “hit” and then jog off the field and stand by a referee. Once
              they reach the referee they must safety their marker. If a players
              calls themselves hit, and later discovers the paintball bounced
              instead of breaking, they may not re-enter on that round as they
              have already called hit.
            </p>
            <h3 className="font-semibold text-xl">
              Close Quarter Combat (CQB)
            </h3>
            <p>
              When within 5 feet of another player, do not shoot. Call out
              “Safety!” as loud as you can, and as many times necessary to alert
              the other player. When within approximately 15 feet of another
              player, attempt to surrender them by calling out “Surrender or
              Die!” at which time the other player may choose to call “hit” and,
              or attempt to stay in the game by fighting back.
            </p>
            <h3 className="font-semibold text-xl">Friendly fire</h3>
            <p>
              Friendly fire is when one teammate shoots another teammate. This
              is not allowed. An accidental friendly fire will be given a
              warning. At the referee’s discretion, accidental or purposeful
              friendly fire will result in the player being sat out of the game,
              or expulsion from the field.{" "}
            </p>
            <p className="italic text-center font-light text-sm my-4">
              * If the head referee can visibly see that all players have
              engaged their barrel blocking devices and safety buttons after a
              round, they may say “field is cold” and remove their masks,
              signifying to others that they may do so. This is the only
              instance in which players may remove their mask on the field.
            </p>
            <p className="italic text-center font-light text-sm">
              ** Engaging both the barrel blocking device and safety button is
              referred to as “safetying” the marker.
            </p>
          </div>
        </div>
        <div className="w-full sticky bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
