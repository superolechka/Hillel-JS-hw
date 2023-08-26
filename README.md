Необходимо создать компонент Definitions.jsx который:

Будет возвращать следующую структуру
    <dl>
        <dt>one</dt>
        <dd>two</dd>
        <dt>another term</dt>
        <dd>another description</dd>
    </dl>
Компонент принимает данные через пропс — данные 
    const definitions = [
        { dt: 'one', dd: 'two', id: 1 },
        { dt: 'another term', dd: 'another description', id: 2 },
    ];
    <DefinitionsList data={definitions} />;
Необходимо принять их в компоненте и отрендерить
Подключить компонент Definitions в App.js и отрендерить его
P.S Не забывайте про пропс key
