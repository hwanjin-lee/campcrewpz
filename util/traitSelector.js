// TODO: Some of the parameters will not match, so check the player.perks.traits
import Image from 'next/image'
import adrenalinejunkie from '../public/traits/Trait_adrenalinejunkie.png';
import agoraphobic from '../public/traits/Trait_agoraphobic.png';
import allthumbs from '../public/traits/Trait_allthumbs.png';
import asthmatic from '../public/traits/Trait_asthmatic.png';
import athletic from '../public/traits/Trait_athletic.png';
import axeman from '../public/traits/Trait_axeman.png';
import baseballplayer from '../public/traits/Trait_baseballplayer.png';
import brave from '../public/traits/Trait_brave.png';
import brawler from '../public/traits/Trait_brawler.png';
import burglar from '../public/traits/Trait_burglar.png';
import claustophobic from '../public/traits/Trait_claustophobic.png';
import clumsy from '../public/traits/Trait_clumsy.png';
import conspicuous from '../public/traits/Trait_conspicuous.png';
import cook from '../public/traits/Trait_cook.png';
import cowardly from '../public/traits/Trait_cowardly.png';
import deaf from '../public/traits/Trait_deaf.png';
import desensitized from '../public/traits/Trait_desensitized.png';
import dextrous from '../public/traits/Trait_dextrous.png';
import disorganized from '../public/traits/Trait_disorganized.png';
import eagleeyed from '../public/traits/Trait_eagleeyed.png';
import emaciated from '../public/traits/Trait_emaciated.png';
import fasthealer from '../public/traits/Trait_fasthealer.png';
import fastlearner from '../public/traits/Trait_fastlearner.png';
import fastreader from '../public/traits/Trait_fastreader.png';
import feeble from '../public/traits/Trait_feeble.png';
import firstaid from '../public/traits/Trait_firstaid.png';
import fishing from '../public/traits/Trait_fishing.png';
import fit from '../public/traits/Trait_fit.png';
import formerscout from '../public/traits/Trait_formerscout.png';
import gardener from '../public/traits/Trait_gardener.png';
import graceful from '../public/traits/Trait_graceful.png';
import gymnast from '../public/traits/Trait_gymnast.png';
import handy from '../public/traits/Trait_handy.png';
import hardofhearing from '../public/traits/Trait_hardofhearing.png';
import heartyappetite from '../public/traits/Trait_heartyappetite.png';
import hemophobic from '../public/traits/Trait_hemophobic.png';
import herbalist from '../public/traits/Trait_herbalist.png';
import highthirst from '../public/traits/Trait_highthirst.png';
import hiker from '../public/traits/Trait_hiker.png';
import hunter from '../public/traits/Trait_hunter.png';
import hypercondriac from '../public/traits/Trait_hypercondriac.png';
import illiterate from '../public/traits/Trait_illiterate.png';
import inconspicuous from '../public/traits/Trait_inconspicuous.png';
import insomniac from '../public/traits/Trait_insomniac.png';
import irongut from '../public/traits/Trait_irongut.png';
import jogger from '../public/traits/Trait_jogger.png';
import keenhearing from '../public/traits/Trait_keenhearing.png';
import lighteater from '../public/traits/Trait_lighteater.png';
import lowthirst from '../public/traits/Trait_lowthirst.png';
import lucky from '../public/traits/Trait_lucky.png';
import mechanics from '../public/traits/Trait_mechanics.png';
import needslesssleep from '../public/traits/Trait_needslesssleep.png';
import needsmoresleep from '../public/traits/Trait_needsmoresleep.png';
import nightowl from '../public/traits/Trait_nightowl.png';
import nightvision from '../public/traits/Trait_nightvision.png';
import nutritionist from '../public/traits/Trait_nutritionist.png';
import obese from '../public/traits/Trait_obese.png';
import organized from '../public/traits/Trait_organized.png';
import out_of_shape from '../public/traits/Trait_out_of_shape.png';
import outdoorsman from '../public/traits/Trait_outdoorsman.png';
import overweight from '../public/traits/Trait_overweight.png';
import pacifist from '../public/traits/Trait_pacifist.png';
import resilient from '../public/traits/Trait_resilient.png';
import shortsighted from '../public/traits/Trait_shortsighted.png';
import slowhealer from '../public/traits/Trait_slowhealer.png';
import slowlearner from '../public/traits/Trait_slowlearner.png';
import slowreader from '../public/traits/Trait_slowreader.png';
import smoker from '../public/traits/Trait_smoker.png';
import speeddemon from '../public/traits/Trait_speeddemon.png';
import stout from '../public/traits/Trait_stout.png';
import strong from '../public/traits/Trait_strong.png';
import sundaydriver from '../public/traits/Trait_sundaydriver.png';
import tailor from '../public/traits/Trait_tailor.png';
import thickskinned from '../public/traits/Trait_thickskinned.png';
import thinskinned from '../public/traits/Trait_thinskinned.png';
import underweight from '../public/traits/Trait_underweight.png';
import unfit from '../public/traits/Trait_unfit.png';
import unlucky from '../public/traits/Trait_unlucky.png';
import very_underweight from '../public/traits/Trait_very_underweight.png';
import weak from '../public/traits/Trait_weak.png';
import weakstomach from '../public/traits/Trait_weakstomach.png';
import driver from '../public/traits/Trait_driver.png';
import sprinter from '../public/traits/Trait_sprinter.png';


export function traitSelector(trait) {
    const width = 15;
    const height = 15;

    // TODO: Check this site to match its name with the icons. https://pzwiki.net/wiki/Traits
    const goodTraitNames = [
        "AdrenalineJunkie",
        "Athletic",
        "Axeman",
        "BaseballPlayer",
        "Brave",
        "Brawler",
        "Burglar",
        "Cook",
        "Cook2",
        "Desensitized",
        "Dextrous",
        "EagleEyed",
        "FastHealer",
        "FastLearner",
        "FastReader",
        "FirstAid",
        "Fishing",
        "Fit",
        "Formerscout",
        "Gardener",
        "Graceful",
        "Gymnast",
        "Handy",
        "Herbalist",
        "Hiker",
        "Hunter",
        "Inconspicuous",
        "IronGut",
        "Jogger",
        "KeenHearing",
        "LightEater",
        "LowThirst",
        "Lucky",
        "Marksman",
        "Mechanics",
        "Mechanics2",
        "NeedsLessSleep",
        "NightOwl",
        "NightVision",
        "Nutritionist",
        "Nutritionist2",
        "Organized",
        "Outdoorsman",
        "Resilient",
        "SpeedDemon",
        "Sprinter",
        "Stout",
        "Strong",
        "Tailor",
        "ThickSkinned",
        "Very Underweight",
        "driver"
    ];

    const badTraitNames=[
        "Agoraphobic",
        "AllThumbs",
        "Asthmatic",
        "Claustophobic",
        "Clumsy",
        "Conspicuous",
        "Cowardly",
        "Deaf",
        "Disorganized",
        "Feeble",
        "HardOfHearing",
        "HeartyAppitite",
        "Hemophobic",
        "HighThirst",
        "Illiterate",
        "Insomniac",
        "Mechanics2",
        "NeedsMoreSleep",
        "Out of Shape",
        "Pacifist",
        "ProneToIllness",
        "ShortSighted",
        "SlowHealer",
        "SlowLearner",
        "SlowReader",
        "Smoker",
        "SundayDriver",
        "Thinskinned",
        "Unfit",
        "Unlucky",
        "Very Underweight",
        "Weak",
        "WeakStomach"
    ];

    if(trait === 'Adrenalinejunkie'){
        return <Image src={adrenalinejunkie} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Agoraphobic'){
        return <Image src={agoraphobic} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'AllThumbs'){
        return <Image src={allthumbs} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Asthmatic'){
        return <Image src={asthmatic} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Athletic'){
        return <Image src={athletic} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Axeman'){
        return <Image src={axeman} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'BaseballPlayer'){
        return <Image src={baseballplayer} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Brave'){
        return <Image src={brave} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Brawler'){
        return <Image src={brawler} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Burglar'){
        return <Image src={burglar} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Claustophobic'){
        return <Image src={claustophobic} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Clumsy'){
        return <Image src={clumsy} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Conspicuous'){
        return <Image src={conspicuous} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Cook'){
        return <Image src={cook} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Cowardly'){
        return <Image src={cowardly} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Deaf'){
        return <Image src={deaf} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Desensitized'){
        return <Image src={desensitized} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Dextrous'){
        return <Image src={dextrous} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Disorganized'){
        return <Image src={disorganized} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'EagleEyed'){
        return <Image src={eagleeyed} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Emaciated'){
        return <Image src={emaciated} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'FastHealer'){
        return <Image src={fasthealer} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'FastLearner'){
        return <Image src={fastlearner} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'FastReader'){
        return <Image src={fastreader} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Feeble'){
        return <Image src={feeble} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'FirstAid'){
        return <Image src={firstaid} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Fishing'){
        return <Image src={fishing} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Fit'){
        return <Image src={fit} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'FormerScout'){
        return <Image src={formerscout} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Gardener'){
        return <Image src={gardener} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Graceful'){
        return <Image src={graceful} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Gymnast'){
        return <Image src={gymnast} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Handy'){
        return <Image src={handy} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'HardOfHearing'){
        return <Image src={hardofhearing} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'HeartyAppitite'){
        return <Image src={heartyappetite} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Hemophobic'){
        return <Image src={hemophobic} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Herbalist'){
        return <Image src={herbalist} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'HighThirst'){
        return <Image src={highthirst} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Hiker'){
        return <Image src={hiker} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Hunter'){
        return <Image src={hunter} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'ProneToIllness'){
        return <Image src={hypercondriac} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Illiterate'){
        return <Image src={illiterate} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Inconspicuous'){
        return <Image src={inconspicuous} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Insomniac'){
        return <Image src={insomniac} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Irongut'){
        return <Image src={irongut} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Jogger'){
        return <Image src={jogger} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'KeenHearing'){
        return <Image src={keenhearing} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'LightEater'){
        return <Image src={lighteater} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'LowThirst'){
        return <Image src={lowthirst} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Lucky'){
        return <Image src={lucky} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Mechanics' || trait === 'Mechanics2'){
        return <Image src={mechanics} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'NeedsLessSleep'){
        return <Image src={needslesssleep} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'NeedsMoreSleep'){
        return <Image src={needsmoresleep} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Nightowl'){
        return <Image src={nightowl} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'NightVision'){
        return <Image src={nightvision} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Nutritionist'){
        return <Image src={nutritionist} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Obese'){
        return <Image src={obese} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Organized'){
        return <Image src={organized} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Out of Shape'){
        return <Image src={out_of_shape} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Outdoorsman'){
        return <Image src={outdoorsman} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Overweight'){
        return <Image src={overweight} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Pacifist'){
        return <Image src={pacifist} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Resilient'){
        return <Image src={resilient} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'ShortSighted'){
        return <Image src={shortsighted} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'SlowHealer'){
        return <Image src={slowhealer} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'SlowLearner'){
        return <Image src={slowlearner} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'SlowReader'){
        return <Image src={slowreader} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Smoker'){
        return <Image src={smoker} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'SpeedDemon'){
        return <Image src={speeddemon} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Stout'){
        return <Image src={stout} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Strong'){
        return <Image src={strong} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'SundayDriver'){
        return <Image src={sundaydriver} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Tailor'){
        return <Image src={tailor} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'ThickSkinned'){
        return <Image src={thickskinned} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Thinskinned'){
        return <Image src={thinskinned} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Underweight'){
        return <Image src={underweight} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Unfit'){
        return <Image src={unfit} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Unlucky'){
        return <Image src={unlucky} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Very Underweight'){
        return <Image src={very_underweight} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Weak'){
        return <Image src={weak} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'WeakStomach'){
        return <Image src={weakstomach} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'driver'){
        return <Image src={driver} width={width} height={height} alt="trait icon"/>
    } else if (trait === 'Sprinter'){
        return <Image src={sprinter} width={width} height={height} alt="trait icon"/>
    } else {
        return "";
    }
}