/* eslint react/no-danger: "off" */
import { sortBy } from 'common/collections';
<<<<<<< HEAD
import { useBackend } from '../backend';
import { Box, Button, LabeledList, Section } from '../components';
import { Window } from '../layouts';
=======
import { useBackend } from "../backend";
import { Box, Button, LabeledList, Section } from "../components";
import { Window } from "../layouts";
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale

export const GuestPass = (props, context) => {
  const { act, data } = useBackend(context);

<<<<<<< HEAD
  const { access, area, giver, giveName, reason, duration, mode, log, uid } = data;
=======
  const {
    access,
    area,
    giver,
    giveName,
    reason,
    duration,
    mode,
    log,
    uid,
  } = data;
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale

  return (
    <Window width={500} height={520} resizable>
      <Window.Content scrollable>
<<<<<<< HEAD
        {(mode === 1 && (
          <Section
            title="Activity Log"
            buttons={<Button icon="scroll" content="Activity Log" selected onClick={() => act('mode', { mode: 0 })} />}>
            <Button icon="print" content="Print" onClick={() => act('print')} fluid mb={1} />
            <Section level={2} title="Logs">
              {/* These are internally generated only. */}
              {(log.length && log.map((l) => <div key={l} dangerouslySetInnerHTML={{ __html: l }} />)) || (
                <Box>No logs.</Box>
              )}
            </Section>
          </Section>
        )) || (
          <Section
            title={'Guest pass terminal #' + uid}
            buttons={<Button icon="scroll" content="Activity Log" onClick={() => act('mode', { mode: 1 })} />}>
            <LabeledList>
              <LabeledList.Item label="Issuing ID">
                <Button content={giver || 'Insert ID'} onClick={() => act('id')} />
              </LabeledList.Item>
              <LabeledList.Item label="Issued To">
                <Button content={giveName} onClick={() => act('giv_name')} />
              </LabeledList.Item>
              <LabeledList.Item label="Reason">
                <Button content={reason} onClick={() => act('reason')} />
              </LabeledList.Item>
              <LabeledList.Item label="Duration (minutes)">
                <Button content={duration} onClick={() => act('duration')} />
              </LabeledList.Item>
            </LabeledList>
            <Button.Confirm icon="check" fluid content="Issue Pass" onClick={() => act('issue')} />
            <Section title="Access" level={2}>
              {sortBy((a) => a.area_name)(area).map((a) => (
=======
        {mode === 1 && (
          <Section title="Activity Log" buttons={
            <Button
              icon="scroll"
              content="Activity Log"
              selected
              onClick={() => act("mode", { mode: 0 })} />
          }>
            <Button
              icon="print"
              content="Print"
              onClick={() => act("print")}
              fluid
              mb={1} />
            <Section level={2} title="Logs">
              {/* These are internally generated only. */}
              {log.length
                && log.map(l => <div key={l} dangerouslySetInnerHTML={{ __html: l }} />)
                || <Box>No logs.</Box>}
            </Section>
          </Section>
        ) || (
          <Section title={"Guest pass terminal #" + uid} buttons={
            <Button
              icon="scroll"
              content="Activity Log"
              onClick={() => act("mode", { mode: 1 })} />
          }>
            <LabeledList>
              <LabeledList.Item label="Issuing ID">
                <Button
                  content={giver || "Insert ID"}
                  onClick={() => act("id")} />
              </LabeledList.Item>
              <LabeledList.Item label="Issued To">
                <Button
                  content={giveName}
                  onClick={() => act("giv_name")} />
              </LabeledList.Item>
              <LabeledList.Item label="Reason">
                <Button
                  content={reason}
                  onClick={() => act("reason")} />
              </LabeledList.Item>
              <LabeledList.Item label="Duration (minutes)">
                <Button
                  content={duration}
                  onClick={() => act("duration")} />
              </LabeledList.Item>
            </LabeledList>
            <Button.Confirm
              icon="check"
              fluid
              content="Issue Pass"
              onClick={() => act("issue")} />
            <Section title="Access" level={2}>
              {sortBy(a => a.area_name)(area).map(a => (
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
                <Button.Checkbox
                  checked={a.on}
                  content={a.area_name}
                  key={a.area}
<<<<<<< HEAD
                  onClick={() => act('access', { access: a.area })}
                />
=======
                  onClick={() => act("access", { access: a.area })} />
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
              ))}
            </Section>
          </Section>
        )}
      </Window.Content>
    </Window>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
