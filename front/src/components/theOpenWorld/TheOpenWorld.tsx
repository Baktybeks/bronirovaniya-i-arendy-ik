import React from 'react';
import Image from 'next/image';
import Imagesti from './icons/Images.png';
import styles from './TheOpenWorld.module.scss';

interface TheOpenWorldProps {
	selectedOption: string;
	setSelectedOption: (value: string) => void;
	selectedDate: Date;
	setSelectedDate: (date: Date) => void;
	formData: object;
	setFormData: (data: object) => void;
}

const TheOpenWorld: React.FC<TheOpenWorldProps> = ({
													   selectedOption,
													   setSelectedOption,
													   selectedDate,
													   setSelectedDate,
													   formData,
													   setFormData
												   }) => {
	const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
	};

	const handleDateChange = (date: Date) => {
		setSelectedDate(date);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFormData({
			option: selectedOption,
			date: selectedDate,
		});
	};

	return (
		<>
			<div className={styles.openWorld}>
				<div className={styles.info}>
					<h1 className={styles.nameHeader}>Осмелитесь прожить жизнь, о которой вы всегда мечтали.</h1>
					<p className={styles.text}>Жизнь коротка, а мир огромен. Так что лучше начать.</p>
					{/*<form onSubmit={handleSubmit}>*/}
					{/*	<select value={selectedOption} onChange={handleOptionChange}>*/}
					{/*		<option value='option1'>Option 1</option>*/}
					{/*		<option value='option2'>Option 2</option>*/}
					{/*	</select>*/}
					{/*	<input*/}
					{/*		type='date'*/}
					{/*		value={selectedDate.toISOString().substring(0, 10)}*/}
					{/*		onChange={(e) => handleDateChange(new Date(e.target.value))}*/}
					{/*	/>*/}
					{/*	<button type='submit'>Submit</button>*/}
					{/*</form>*/}
				</div>
				<div className={styles.image}>
					<Image src={Imagesti} alt='image' />
				</div>
			</div>
		</>
	);
};

export default TheOpenWorld;
