```java
Icon cannot be found in 'icons/st.png', aClass='class org.antlr.jetbrains.st4plugin.Icons'
java.lang.Throwable: Icon cannot be found in 'icons/st.png', aClass='class org.antlr.jetbrains.st4plugin.Icons'
	at com.intellij.openapi.diagnostic.Logger.error(Logger.java:123)
	at com.intellij.openapi.util.IconLoader.getIcon(IconLoader.java:145)
	at com.intellij.openapi.util.IconLoader.getIcon(IconLoader.java:106)
	at org.antlr.jetbrains.st4plugin.Icons.<clinit>(Icons.java:8)
	at org.antlr.jetbrains.st4plugin.STGroupFileType.getIcon(STGroupFileType.java:39)
	at com.intellij.ide.util.gotoByName.ChooseByNameLanguageFilter.iconForFilterValue(ChooseByNameLanguageFilter.java:49)
	at com.intellij.ide.util.gotoByName.ChooseByNameLanguageFilter.iconForFilterValue(ChooseByNameLanguageFilter.java:32)
	at com.intellij.ide.util.gotoByName.ChooseByNameFilter$5.getItemIcon(ChooseByNameFilter.java:158)
	at com.intellij.ide.util.MultiStateElementsChooser$MyElementColumnCellRenderer.customizeCellRenderer(MultiStateElementsChooser.java:676)
	at com.intellij.ui.ColoredTableCellRenderer.getTableCellRendererComponent(ColoredTableCellRenderer.java:36)
	at com.intellij.ui.table.JBTable.calculateRowHeight(JBTable.java:212)
	at com.intellij.ui.table.JBTable.getRowHeight(JBTable.java:190)
	at javax.swing.JTable.tableRowsInserted(JTable.java:4477)
	at javax.swing.JTable.tableChanged(JTable.java:4407)
	at javax.swing.table.AbstractTableModel.fireTableChanged(AbstractTableModel.java:296)
	at javax.swing.table.AbstractTableModel.fireTableRowsInserted(AbstractTableModel.java:231)
	at com.intellij.ide.util.MultiStateElementsChooser$MyTableModel.addElements(MultiStateElementsChooser.java:516)
	at com.intellij.ide.util.MultiStateElementsChooser$MyTableModel.access$700(MultiStateElementsChooser.java:468)
	at com.intellij.ide.util.MultiStateElementsChooser.setElements(MultiStateElementsChooser.java:352)
	at com.intellij.ide.util.MultiStateElementsChooser.<init>(MultiStateElementsChooser.java:172)
	at com.intellij.ide.util.MultiStateElementsChooser.<init>(MultiStateElementsChooser.java:78)
	at com.intellij.ide.util.ElementsChooser.<init>(ElementsChooser.java:42)
	at com.intellij.ide.util.gotoByName.ChooseByNameFilter$5.<init>(ChooseByNameFilter.java:150)
	at com.intellij.ide.util.gotoByName.ChooseByNameFilter.createChooser(ChooseByNameFilter.java:150)
	at com.intellij.ide.util.gotoByName.ChooseByNameFilter.<init>(ChooseByNameFilter.java:97)
	at com.intellij.ide.util.gotoByName.ChooseByNameLanguageFilter.<init>(ChooseByNameLanguageFilter.java:37)
	at com.intellij.ide.actions.GotoClassAction$1.createFilter(GotoClassAction.java:94)
	at com.intellij.ide.actions.GotoActionBase.showNavigationPopup(GotoActionBase.java:246)
	at com.intellij.ide.actions.GotoActionBase.showNavigationPopup(GotoActionBase.java:226)
	at com.intellij.ide.actions.GotoActionBase.showNavigationPopup(GotoActionBase.java:197)
	at com.intellij.ide.actions.GotoActionBase.showNavigationPopup(GotoActionBase.java:188)
	at com.intellij.ide.actions.GotoClassAction.gotoActionPerformed(GotoClassAction.java:91)
	at com.intellij.ide.actions.GotoActionBase.actionPerformed(GotoActionBase.java:71)
	at com.intellij.ide.actions.GotoClassAction.actionPerformed(GotoClassAction.java:66)
	at com.intellij.openapi.actionSystem.ex.ActionUtil$1.run(ActionUtil.java:220)
	at com.intellij.openapi.actionSystem.ex.ActionUtil.performActionDumbAware(ActionUtil.java:237)
	at com.intellij.openapi.keymap.impl.IdeKeyEventDispatcher$1.performAction(IdeKeyEventDispatcher.java:578)
	at com.intellij.openapi.keymap.impl.IdeKeyEventDispatcher.lambda$processAction$2(IdeKeyEventDispatcher.java:627)
	at com.intellij.openapi.application.TransactionGuardImpl.performUserActivity(TransactionGuardImpl.java:195)
	at com.intellij.openapi.keymap.impl.IdeKeyEventDispatcher.processAction(IdeKeyEventDispatcher.java:626)
	at com.intellij.openapi.keymap.impl.IdeKeyEventDispatcher.inInitState(IdeKeyEventDispatcher.java:478)
	at com.intellij.openapi.keymap.impl.IdeKeyEventDispatcher.dispatchKeyEvent(IdeKeyEventDispatcher.java:212)
	at com.intellij.ide.IdeEventQueue._dispatchEvent(IdeEventQueue.java:702)
	at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:395)
	at java.awt.EventDispatchThread.pumpOneEventForFilters(EventDispatchThread.java:201)
	at java.awt.EventDispatchThread.pumpEventsForFilter(EventDispatchThread.java:116)
	at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:105)
	at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:101)
	at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:93)
	at java.awt.EventDispatchThread.run(EventDispatchThread.java:82)
```	