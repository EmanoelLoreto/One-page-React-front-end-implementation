import React from 'react'

import './SauverTravail.css'
import BackgroundSauverTravail from '../../assets/background-sauver-travail.jpg'
import ArtShortlist from '../../assets/art-shortlist.png'

import { ReactComponent as InfoCircle } from '../../assets/info-circle.svg'
import { ReactComponent as MessageQuestionSquare } from '../../assets/message-question-square.svg'
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg'

export default function SauverTravail() {
  return (
    <div className='container'>

      <div className='containerPicture'>
        <h1 className='title'>
          Enregistrez
          <p className='titleBold'>
            votre œuvre
          </p>
          en quelques étapes
        </h1>
        <img
          src={ BackgroundSauverTravail }
          className="backgroundSauverTravail"
          alt="Background container Sauver Travail"
        />
        <img
          src={ ArtShortlist }
          className="artShortlistBottom"
          alt="Art Shortlist"
        />
      </div>

      <div className='containerInformation'>
        <div className='containerInformationForm'>
          <h1 className='titleMobile'>
            Enregistrez
            <p className='titleBold'>
              votre œuvre
            </p>
            en quelques étapes
          </h1>
          
          <div className='containerImportant'>
            <div className='infoCircleAndTitle'>
              <InfoCircle />
              <span className='titleImportant'>
                Important
              </span>
            </div>

            <div className='informationForm'>
              <span className='descriptionForm'>
                Remplissez avec <b>précision</b> toutes les sections de ce formulaire et donnez le maximum d’informations sur votre œuvre.
              </span>
              <span className='descriptionForm'>
                Les champs marqués d’un <b>astérisque (*)</b> sont obligatoires.
              </span>
            </div>
          </div>

          <div className='containerImportant'>
            <div className='infoCircleAndTitle'>
              <MessageQuestionSquare />
              <span className='titleImportant'>
                Besoin d’aide ?
              </span>
            </div>

            <div className='informationForm'>
              <span className='descriptionForm'>
                Nous sommes à <b>votre disposition</b> pour vous conseiller afin d’inscrire votre œuvre à notre catalogue dans les meilleures conditions.
              </span>
              <span className='descriptionForm'>
                Contactez-nous par <b>email</b>, via le <b>chat</b> ou directement par <b>téléphone</b>.
              </span>
            </div>
          </div>

          <span className='bottomInformationForm'>
            Si vous n’arrivez pas à remplir l’intégralité des champs obligatoires du formulaire, n’hésitez pas à faire <b>une demande d’expertise</b>, elle est totalement <b>gratuite</b>.
          </span>
        </div>

        <div className='containerActionBottom'>
          <div className='containerArrow'>
            <ArrowIcon />
            <span className='textArrow'>Retour</span>
          </div>

          <button className='sendWork'>Renseigner mon œuvre</button>
        </div>
      </div>
    </div>
  )
}
