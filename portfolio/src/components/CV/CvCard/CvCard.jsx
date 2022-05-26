import styles from './cvCard.module.scss';
import clsx from 'clsx';

const CvCard = ({obj, index, program, infoIsVisible, handleClickCard}) => {
	return (
		<article onClick={() => handleClickCard(index, program.title, obj.type)} className={clsx(styles.cvCard, {
			[styles.white]: obj.type === 'LIA' || obj.type === 'Utbildning',
			[styles.first]: obj.type === 'LIA och praktik',
			[styles.second]: obj.type === 'Arbetslivserfarenhet',
			[styles.third]: obj.type === 'utbildning',
			[styles.addBorder]: infoIsVisible.showIndex === index && infoIsVisible.program === program.title && infoIsVisible.type === obj.type  
		})}>
			<h4>{program.title}</h4>
			<h3 className={clsx(styles.plus, {[styles.up]:infoIsVisible && infoIsVisible.showIndex === index && infoIsVisible.program === program.title && infoIsVisible.type === obj.type  })}>&#10507;</h3>
			<span>{program.dates}</span>
			<p>{program.place}</p>
			{ 
				infoIsVisible && infoIsVisible.showInfo ? (
					<div 
						className={clsx(styles.hidden, {
							[styles.showHidden]: infoIsVisible.showIndex === index && infoIsVisible.program === program.title && infoIsVisible.type === obj.type  
						})}
					>
						<p>{program.other}</p>
						<ul> 
							{program.tasks?.map((task) => (
								<li key={`task-${index}-${program.title}-${program.dates}-${obj.type}-${task}mmm`}>
									{task}
								</li>
							))}
						</ul>
					</div>
				) : null
			}
		</article>
	);
};

export default CvCard;