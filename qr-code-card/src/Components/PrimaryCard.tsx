import './PrimaryCard.scss'
import qr from '../Images/qrimg.png'

type Props = {}

export const PrimaryCard = (props: Props) => {
	return (
		<>
			<main className='primaryframe'>
				<img src={qr} alt="QR Code"/>
				<article>
					<p>Improve your front-end skills by building projects</p>
					<p>Scan teh QR code to visit Frontend Mentor and take your coding skills to teh next level</p>
				</article>
			</main>
		</>
	)
}