import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle class='ion-text-center'>People</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<ExploreContainer />
			</IonContent>
		</IonPage>
	);
};

export default Home;
