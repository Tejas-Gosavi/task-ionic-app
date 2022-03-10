import './ExploreContainer.css';
import { faker } from '@faker-js/faker';
import { briefcaseOutline } from 'ionicons/icons';

import { IonBadge, IonListHeader, IonItem, IonLabel, IonList, IonAvatar, IonIcon, IonNote } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

	let users = []
	for (let id = 1; id <= 10; id++) {

		let user = faker.helpers.contextualCard();
		let jobType = faker.name.jobType();
		let jobTitle = faker.name.jobTitle();
		let jobArea = faker.name.jobArea();

		users.push({
			...user,
			"id": id,
			"job_type": jobType,
			"job_area": jobArea,
			"job_title": jobTitle,
		});
	}
	return (
		<div className="container">
			<IonList>
				<IonListHeader className='list-header'>Connections</IonListHeader>
				{users.map(user =>
					<IonItem key={user.id}>
						<IonAvatar slot="start">
							<img src={`${user.avatar}`} alt={user.username} />
						</IonAvatar>
						<IonLabel>
							<div className='title'>
								<div>
									{user.name} | <span className='job-area'>{user.job_type}</span>
								</div>
								<div>
									<IonBadge color="light">{user.job_area}</IonBadge>
								</div>
							</div>
							<IonNote className='subtitle'>
								<div>
									<IonIcon className='icon' icon={briefcaseOutline}></IonIcon> {user.company.name}
								</div>
							</IonNote>
							
						</IonLabel>
					</IonItem>
				)}
			</IonList>
		</div>
	);
};

export default ExploreContainer;
